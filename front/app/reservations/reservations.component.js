import template from './reservations.component.html';

class controller {
    constructor (ReservationService, $location, API_RESERVATION) {

        this.ReservationService = ReservationService
        this.$location = $location
        this.apiUrlResa = API_RESERVATION
    }

    $onInit () {
        this.BanqueService.getReservations()
        .then(reservations => this.reservations = reservations)
    }
}

export let ReservationsComponent = {
    template,
    controller,
    bindings: {

    }
};
