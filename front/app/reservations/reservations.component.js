import template from './reservations.component.html';
import templateModal from './detailsResa.html';



class controller {
    constructor (ReservationService, $uibModal) {

        this.ReservationService = ReservationService

        this.$uibModal = $uibModal

    }

    $onInit () {
        this.ReservationService.getReservations()
        .then(reservations => this.reservations = reservations)

        this.ReservationService.getHistorique()
        .then(historiques => this.historiques  = historiques )
    }

   detailsReservation(historique){


        this.$uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            template: templateModal,
            controller: function() {
                 this.depart = "yo!"
                 this.unHistorique = historique;
            },
            controllerAs: '$ctrl',
    });



      // window.open('detailsResa.html','nom_de_ma_popup','menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
   }
}

export let ReservationsComponent = {
    template,
    controller,
    bindings: {

    }
};
