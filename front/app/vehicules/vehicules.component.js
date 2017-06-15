import './vehicules.component.css';
import template from './vehicules.component.html';

class controller {
    constructor (VehiculesComponent) {
        this.VehiculesComponent=VehiculesComponent
    }

    $onInit () {
        this.VehiculesComponent.getVehicules()
        .then(vehicules => this.vehicules = vehicules)
        console.log("VehiculesComponent",this.vehicules)
    }
}

export let VehiculesComponent = {
    template,
    controller,
    bindings: {

    }
};
