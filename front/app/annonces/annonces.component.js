import template from './annonces.component.html';

class controller {
    constructor(AnnoncesService) {
        this.AnnoncesService = AnnoncesService;
        this.viewby = 10;
        this.totalItems = 0;
        this.currentPage = 1;
        this.itemsPerPage = 2;
        this.maxSize = 0;
        this.pages = [];

    }

    $onInit() {
        this.AnnoncesService.getReservations()
            .then(annonces => this.annonces = annonces);

        this.AnnoncesService.getHistorique()
            .then(historiques => {
                this.historiques = historiques;
                this.totalItems = this.historiques.length;
                this.maxSize = Math.ceil(this.totalItems / this.itemsPerPage);
                for (var i = 1; i <= this.maxSize; i++) {
                    this.pages.push(i);
                }
            });
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

export let AnnoncesComponent = {
    template,
    controller,
    bindings: {

    }
};
