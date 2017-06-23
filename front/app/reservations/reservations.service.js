export class ReservationService {
    constructor($http, $q, API_RESERVATION, API_HISTORIQUE, LoginService, API_AJOUT_RESERVATION) {
        this.$http = $http
        this.$q = $q
        this.apiUrlResa = API_RESERVATION
        this.apiUrlHisto = API_HISTORIQUE
        this.apiUrlAjoutReservation = API_AJOUT_RESERVATION
        this.LoginService= LoginService
        this.afficheCovoit =false;
    }

    getAffiche() {
        return this.afficheCovoit;
    }

    ChangeAffiche(){
        this.afficheCovoit=!this.afficheCovoit;
    }

    /**
     * recupere via l'url : la liste des reservations en cours du collaborateur connectés qui sont aprés la date et l'heure du jour
     */
    getReservations() {
        return this.$http.get(this.apiUrlResa+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data)   
    }
    
    
    getChauffeur(matricule){
        return this.$http.get(this.apiUrlHisto+"/chauffeur?matricule="+matricule)
            .then(response => response.data) 
    }

    /**
     * recupere via l'url : une liste qui comprend l'historique des réservations du collaborateur connectés qui sont avant la date et l'heure du jour
     */
    getHistorique() {
        return this.$http.get(this.apiUrlHisto+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data)
          
    }

    /**
     * envoie via l'url : la reservation du collaborateur
     * @param {*} reservation : covoiturage qu'a choisi le collaborateur
     */
    postNewReservation(reservation){
        return this.$http.post( this.apiUrlAjoutReservation, reservation)
        .then(response => response.data)
    }

    


}
