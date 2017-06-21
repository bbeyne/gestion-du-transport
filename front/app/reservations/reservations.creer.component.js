import template from './reservations.creer.component.html';


class controller {
    constructor(ReservationService, VehiculesService) {
        this.ReservationService = ReservationService;
        this.VehiculesService=VehiculesService;
        this.currentPage = 1;
        this.totalItems=0;
    }

    $onInit() {
        this.afficheCovoit=this.ReservationService.getAffiche();
        this.VehiculesService.getVehicules()
            .then(vehicules => {this.vehicules = vehicules
                this.totalItems = this.vehicules.length;
        })
    }
    changePage(num) {
            this.currentPage = (this.currentPage+num+this.totalItems)%this.totalItems+1;
        console.log(this.currentPage)
    }
    afficherCovoit(){
        this.afficheCovoit = !this.afficheCovoit
    }
}

export let ReservationsCreerComponent = {
    template,
    controller,
    bindings: {
    }
};