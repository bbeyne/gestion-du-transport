import template from './reservations.creer.component.html';


class controller {
    constructor(ReservationService) {
        this.ReservationService = ReservationService;
        
    }

    $onInit() {
        this.afficheCovoit=this.ReservationService.getAffiche();
        
    }
    afficherCovoit(){
        ;this.afficheCovoit = !this.afficheCovoit
    }
}

export let ReservationsCreerComponent = {
    template,
    controller,
    bindings: {
    }
};