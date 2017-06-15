export class AnnonceService {
    constructor($http, $q, API_ANONNCE) {
        this.$http = $http;
        this.$q = $q;
        this.apiUrlAnnonce = API_ANONNCE;

        console.log("API_ANONNCE", API_ANONNCE);
    }

    getReservations() {
        return this.$http.get(this.apiUrlAnnonce)
            .then(response => response.data);
    }
}
