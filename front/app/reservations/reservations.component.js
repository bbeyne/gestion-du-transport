import template from './reservations.component.html';

class controller {
    constructor (ReservationService) {

        this.ReservationService = ReservationService
        
    }

    $onInit () {
        this.ReservationService.getReservations()
        .then(reservations => this.reservations = reservations)
    }
}

export let ReservationsComponent = {
    template,
    controller,
    bindings: {

    }
};
