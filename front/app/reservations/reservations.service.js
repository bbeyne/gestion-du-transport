export class ReservationService {
    constructor($http, $q, API_RESERVATION) {
        this.$http = $http
        this.$q = $q
        this.apiUrlResa = API_RESERVATION

        console.log("API_RESERVATION", API_RESERVATION)
    }

    getReservations() {
        return this.$http.get(this.apiUrlResa)
            .then(response => response.data)
          
            
    }
}
