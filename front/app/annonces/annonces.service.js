export class AnnoncesService {
    constructor($http, $q, API_ANNONCE, API_ANNONCE_HISTORIQUE, LoginService) {
        this.$http = $http;
        this.$q = $q;
        this.apiUrlAnnonce = API_ANNONCE;
        this.apiUrlHisto = API_ANNONCE_HISTORIQUE;
        this.LoginService= LoginService;
    }

    getReservations() {
        console.log(this.LoginService.LoadCookie().matricule);
        return this.$http.get(this.apiUrlAnnonce+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data);
    }

    getHistorique() {
        return this.$http.get(this.apiUrlHisto+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data);

    }
}
