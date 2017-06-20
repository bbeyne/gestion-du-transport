import './vehicules.component.css'
import template from './vehicules.component.html';
import templateAddVehicule from './ajouterVehicule.html';


class controller {
    constructor(VehiculesService, $uibModal) {
        this.$uibModal = $uibModal

        this.VehiculesService = VehiculesService
        this.categories;

    }

    $onInit() {
        this.VehiculesService.getVehicules()
            .then(vehicules => this.vehicules = vehicules)



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

                    this.VehiculesService.getNbCategorie()
                        .then(nbCategorie => this.categories = nbCategorie)

                    this.fermer = () => {
                        $uibModalInstance.dismiss('cancel');
                    }
                    this.ajouterVehicule = (infoForm) => {
                        this.vehicules= {
                            id: "" ,
                            categorie: "",
                            immatriculation: "",
                            marque:"",
                            modele:"",
                            nb_places:"",
                            statut:"EN_SERVICE",
                            url_image:"",
                            id_coordonnees_id:""
                        }

                        this.vehicules.immatriculation=infoForm.immatriculationInput.$modelValue
                        this.vehicules.modele=infoForm.modeleInput.$modelValue
                        this.vehicules.marque=infoForm.marqueInput.$modelValue
                        this.vehicules.categorie=infoForm.selectCategorie.$modelValue.trim()
                        this.vehicules.url_image=infoForm.urlImageInput.$modelValue

                        if(this.VehiculesService.verifImmat(infoForm.immatriculationInput.$modelValue)){
                            this.VehiculesService.createNewVehicule(this.vehicules)
                            this.fermer()
                            setTimeout(function(){
                                window.location.reload()
                            },0)
                        }else{
                            this.immatInvalid=true
                            console.log("error")//error immat
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
