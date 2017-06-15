import './vehicules.component.css'
import template from './vehicules.component.html';

class controller {
    constructor (VehiculesService) {
        this.VehiculesService = VehiculesService
    }

    $onInit () {
        this.VehiculesService.getVehicules()
        .then(vehicules => this.vehicules = vehicules)
    }
}

export let VehiculesComponent = {
    template,
    controller,
    bindings: {

    }
};
