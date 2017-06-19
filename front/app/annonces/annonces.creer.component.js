import template from './annonces.creer.component.html';

class controller {
    constructor(AnnoncesService) {
        this.AnnoncesService = AnnoncesService;

    }

    $onInit() {
        this.AnnoncesService.getReservations()
            .then(annonces => this.annonces = annonces);

        
    }
    changePage(num) {
        if ( !(num ===0 || num > this.historiques.length-1) ) {
                    this.currentPage = num;
        }

    }
    detailAnnonce() {
        window.open('details.html', 'details', 'menubar=no, scrollbars=no, top=200, left=400, width=500, height=400');
    }

}

export let AnnoncesCreerComponent = {
    template,
    controller,
    bindings: {

    }
};