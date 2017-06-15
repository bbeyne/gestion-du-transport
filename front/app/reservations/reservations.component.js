import template from './reservations.component.html';

class controller {
    constructor (ReservationService) {

        this.ReservationService = ReservationService
        
    }

    $onInit () {
        this.ReservationService.getReservations()
        .then(reservations => this.reservations = reservations)

        this.ReservationService.getHistorique()
        .then(historiques => this.historiques  = historiques )
    }
}

export let ReservationsComponent = {
    template,
    controller,
    bindings: {

    }
};
