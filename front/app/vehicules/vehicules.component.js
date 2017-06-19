import './vehicules.component.css'
import template from './vehicules.component.html';
import templateAddVehicule from './ajouterVehicule.html';



class controller {
    constructor (VehiculesService,$uibModal) {
        this.$uibModal=$uibModal
        this.VehiculesService = VehiculesService
    }

    $onInit () {
        this.VehiculesService.getVehicules()
        .then(vehicules => this.vehicules = vehicules)

        this.VehiculesService.getNbCategorie()
        .then(nbCategorie => this.categories = nbCategorie)
    }

    ouvrirPopUP(){
        this.$uibModal.open({
            animation: true,
            template: templateAddVehicule,
            controller,
            controllerAs: '$ctrl',
        });
    }

    closePopUp(){
        console.log(this.$uibModal)
    }

    ajouterVehicule(infoForm){
        console.log(infoForm)
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
