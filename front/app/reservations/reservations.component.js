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

    detailReservation (){
        window.open('details.html','details','menubar=no, scrollbars=no, top=200, left=400, width=500, height=400');
    
  
    }
}

export let ReservationsComponent = {
    template,
    controller,
    bindings: {

    }
};
