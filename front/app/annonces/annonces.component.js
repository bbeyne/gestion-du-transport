import template from './annonces.component.html';

class controller {
    constructor (AnnoncesService) {
        this.AnnoncesService = AnnoncesService;
    }

    $onInit () {
        this.AnnoncesService.getReservations()
        .then(annonces => this.annonces = annonces);

        this.AnnoncesService.getHistorique()
        .then(historiques => this.historiques = historiques);
    }

    detailAnnonce (){
        window.open('details.html','details','menubar=no, scrollbars=no, top=200, left=400, width=500, height=400');
    }
}

export let AnnoncesComponent = {
    template,
    controller,
    bindings: {

    }
};
