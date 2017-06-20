export class ReservationService {
    constructor($http, $q, API_RESERVATION, API_HISTORIQUE, LoginService) {
        this.$http = $http
        this.$q = $q
        this.apiUrlResa = API_RESERVATION
        this.apiUrlHisto = API_HISTORIQUE
        this.LoginService= LoginService
        this.afficheCovoit =false;
    }
    getAffiche() {
        return this.afficheCovoit;
    }
    ChangeAffiche(){
        this.afficheCovoit=!this.afficheCovoit;
    }
    getReservations() {
        return this.$http.get(this.apiUrlResa+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data)   
    }
    getChauffeur(matricule){
        return this.$http.get(this.apiUrlHisto+"/chauffeur?matricule="+matricule)
            .then(response => response.data) 
    }

    getHistorique() {
        return this.$http.get(this.apiUrlHisto+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data)
          
            
    }

    


}
