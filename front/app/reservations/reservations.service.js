export class ReservationService {
    constructor($http, $q, API_RESERVATION, API_HISTORIQUE) {
        this.$http = $http
        this.$q = $q
        this.apiUrlResa = API_RESERVATION
        this.apiUrlHisto = API_HISTORIQUE

        console.log("API_RESERVATION", API_RESERVATION)
    }

    getReservations() {
        return this.$http.get(this.apiUrlResa)
            .then(response => response.data)
          
            
    }

    getHistorique() {
        return this.$http.get(this.apiUrlHisto)
            .then(response => response.data)
          
            
    }
   


}
