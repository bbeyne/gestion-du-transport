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

    ajouterVehicule(){
        this.$uibModal.open({
            animation: true,
            template: templateAddVehicule,
            controller,
            controllerAs: '$ctrl',
        });
    }
}

export let VehiculesComponent = {
    template,
    controller,
    bindings: {

    }
};
