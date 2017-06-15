export class VehiculesService {
    constructor($http,$q, API_VEHICULE) {
        console.log("service")
        this.$http = $http
        this.$q=$q
        this.apiUrlVehicule = API_VEHICULE
        console.log("api",API_VEHICULE)
    }

    getVehicules() {
        return this.$http.get(this.apiUrlVehicule)
            .then(response => response.data)
    }
}
