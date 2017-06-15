import template from './annonces.component.html';

class controller {
    constructor (AnnonceService, $location, API_ANONNCE) {

        this.AnnonceService = AnnonceService;
        this.$location = $location;
        this.apiUrlAnnonce = API_ANONNCE;
    }

    $onInit () {
        this.AnnonceService.getAnnonces()
        .then(annonces => this.annonces = annonces);
    }
}

export let AnnoncesComponent = {
    template,
    controller,
    bindings: {

    }
};
