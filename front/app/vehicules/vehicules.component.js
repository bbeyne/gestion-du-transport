import './vehicules.component.css'
import template from './vehicules.component.html';
import templateAddVehicule from './ajouterVehicule.html';


class controller {
    constructor(VehiculesService, $uibModal,$location) {
        this.$uibModal = $uibModal
        this.$location=$location
        this.VehiculesService = VehiculesService
        this.categories

    }

    $onInit() {
        this.VehiculesService.getVehicules()
            .then(vehicules => this.vehicules = vehicules)
    }

    pageDetailVehicule(immatriculation){
        this.$location.hash(immatriculation)
        this.$location.path('/admin/vehicules/immatriculation')
    }

    ouvrirPopUP() {
        this.$uibModal.open({
            animation: true,
            template: templateAddVehicule,
            controller:
                //**********************************************************
                //A mettre dans un nouveau controller
                function ($uibModalInstance, VehiculesService) {
                    this.VehiculesService = VehiculesService
                    this.vehicules= {
                        id:"",
                        categorie:"",
                        immatriculation:"",
                        marque:"",
                        modele:"",
                        nbPlaces:0,
                        statut:"EN_SERVICE",
                        urlImage:"",
                        idCoordonneesId:""
                    }

                    this.VehiculesService.getNbCategorie()
                        .then(nbCategorie => this.categories = nbCategorie)

                    this.fermer = () => {
                        $uibModalInstance.dismiss('cancel');
                    }
                    this.ajouterVehicule = (infoForm) => {

                        this.vehicules.immatriculation=infoForm.immatriculationInput.$modelValue
                        this.vehicules.modele=infoForm.modeleInput.$modelValue
                        this.vehicules.marque=infoForm.marqueInput.$modelValue
                        this.vehicules.categorie=infoForm.selectCategorie.$modelValue.trim()
                        this.vehicules.nbPlaces=infoForm.nbPlaceInput.$modelValue
                        this.vehicules.urlImage=infoForm.urlImageInput.$modelValue

                        if(this.VehiculesService.verifImmat(infoForm.immatriculationInput.$modelValue)){
                            this.VehiculesService.createNewVehicule(this.vehicules)
                            setTimeout(function(){
                                window.location.reload()
                                this.fermer()
                            },500)
                        }else{

                            this.immatInvalid=true
                        }

                    }
                },
            //*****************************************************

            controllerAs: '$ctrl',
            backdrop: false,
        }).result.catch(function (res) {
            if (!(res === 'cancel' || res === 'escape key press' || res === 'backdrop click')) {
                throw res;
            }
        });
    }
}


export let VehiculesComponent = {
    template,
    controller,
    bindings: {
        categories: '<'
    }
};
