import './vehicules.component.css'
import template from './vehicules.component.html';
import templateAddVehicule from './ajouterVehicule.html';


class controller {
    constructor (VehiculesService,$uibModal) {
        this.$uibModal=$uibModal
        this.VehiculesService = VehiculesService
        this.modalInstance
    }

    $onInit () {
        this.VehiculesService.getVehicules()
        .then(vehicules => this.vehicules = vehicules)

        this.VehiculesService.getNbCategorie()
        .then(nbCategorie => this.categories = nbCategorie)
    }

    ouvrirPopUP(){
        this.modalInstance=this.$uibModal.open({
            animation: true,
            template: templateAddVehicule,
            controller: function($uibModalInstance) {
                this.fermer = () => {
                    $uibModalInstance.dismiss('cancel');
                }
            },
            controllerAs: '$ctrl',
            backdrop: false,
        }).result.catch(function (res) {
            if (!(res === 'cancel' || res === 'escape key press' || res === 'backdrop click')) {
                throw res;
            }
        });
    }


    ajouterVehicule(infoForm){
        let vehicule = []
        vehicule.push(infoForm.marqueInput.$modelValue)
        vehicule.push(infoForm.modeleInput.$modelValue)
        vehicule.push(infoForm.immatriculationInput.$modelValue)
        vehicule.push(infoForm.selectCategorie.$modelValue)
        vehicule.push(infoForm.urlImageInput.$modelValue)

        this.VehiculesService.createNewVehicule(vehicule)
    }
}


export let VehiculesComponent = {
    template,
    controller,
    bindings: {

    }
};
