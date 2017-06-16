export class AnnoncesService {
    constructor($http, $q, API_ANNONCE, API_ANNONCE_HISTORIQUE) {
        this.$http = $http;
        this.$q = $q;
        this.apiUrlAnnonce = API_ANNONCE;
        this.apiUrlHisto = API_ANNONCE_HISTORIQUE;

        console.log("API_ANNONCE", API_ANNONCE);
    }

    getReservations() {
        return this.$http.get(this.apiUrlAnnonce)
            .then(response => response.data);
    }

    getHistorique() {
        return this.$http.get(this.apiUrlHisto)
            .then(response => response.data);


    }
}
