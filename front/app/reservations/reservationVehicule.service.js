export class ReservationVehiculeService {
    constructor($http, $q, API_RESERVATION_Vehicule, API_HISTORIQUE_Vehicule,API_HISTORIQUE, LoginService) {
        this.$http = $http
        this.$q = $q
        this.apiUrlResa = API_RESERVATION_Vehicule
        this.apiUrlHistorique = API_HISTORIQUE
        this.apiUrlHisto = API_HISTORIQUE_Vehicule
        this.LoginService= LoginService

    }
    getReservationsbyMatricule() {
        return this.$http.get(this.apiUrlResa+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data)   
    }
    getReservationsbyVoiture(vehiculeId) {
        return this.$http.get(this.apiUrlResa+"Vehicule?vehiculeId="+vehiculeId)
            .then(response => response.data)   
    }
    getChauffeur(matricule){
        return this.$http.get(this.apiUrlHistorique+"/chauffeur?matricule="+matricule)
            .then(response => response.data) 
    }

    getHistorique() {
        return this.$http.get(this.apiUrlHisto+"?matricule="+this.LoginService.LoadCookie().matricule)
            .then(response => response.data)
    }     
    createNewReservVoit(nouvelleReservVoit) {
        return this.$http.post( this.apiUrlResa+'/ajouterReserv', nouvelleReservVoit)
        .then(response => response.data)
    }       
    

    


}
