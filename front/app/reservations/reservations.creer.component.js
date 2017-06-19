import template from './reservations.creer.component.html';

class controller {
    constructor(AnnoncesService) {
        this.AnnoncesService = AnnoncesService;

    }

    $onInit() {
        this.AnnoncesService.getReservations()
            .then(annonces => this.annonces = annonces);

        
    }

}

export let ReservationsCreerComponent = {
    template,
    controller,
    bindings: {

    }
};