export class AnnoncesService {

    constructor($http, API_ANNONCE, API_ANNONCE_HISTORIQUE, API_ANNONCE_POST, LoginService, API_ANNONCE_AFTER_DATE) {

        this.$http = $http;
        this.apiUrlPost = API_ANNONCE_POST;
        this.apiUrlAnnonce = API_ANNONCE;
        this.apiUrlHisto = API_ANNONCE_HISTORIQUE;
        this.apiUrlAnnonceAfterDate = API_ANNONCE_AFTER_DATE;
        this.LoginService= LoginService;
    }

    getReservations() {
        return this.$http.get(this.apiUrlAnnonce+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data);
    }

    /**
     * recupere via l'url :  toutes les annonces qui sont aprés la date et l'heure du jour
     */
    getAnnoncesAfterDate(){
        return this.$http.get(this.apiUrlAnnonceAfterDate)
            .then(response => response.data);
    }

    getHistorique() {
        return this.$http.get(this.apiUrlHisto+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data);
    }

    createNewAnnonce (annonce) {
        return this.$http.post( this.apiUrlPost, annonce)
        .then(response => response.data);
    }

    // verifImmat(immatriculation){
    //     let reponse;
    //     let reg=/[A-Z]{2}-\d{3}-[A-Z]{2}/;
    //     reg.test(immatriculation) ? reponse=true : reponse=false
    //     return reponse;
    // }
}
