import template from './detailVehicules.component.html';

class controller {
    constructor ($location,VehiculesService,ReservationVehiculeService) {
        this.$location=$location
        this.VehiculesService=VehiculesService
        this.ReservationVehiculeService=ReservationVehiculeService
        this.immatriculation=this.$location.$$hash

    }
    $onInit(){
        this.getVehicules()
        this.getReservations()
    }

    getVehicules(){
        this.VehiculesService.getVehicules()
            .then(vehicules => this.vehicules = vehicules)
    }

    getReservations(){
        this.ReservationVehiculeService.getReservations()
            .then(reservations => this.reservations = reservations)
           // .then(p=>{console.log(this.reservations)})
    }

    goBack(){
        window.history.back()
    }
}




export let DetailVehiculesComponent = {
    template,
    controller,
    bindings: {
    }
};
