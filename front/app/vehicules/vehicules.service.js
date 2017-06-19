export class VehiculesService {
    constructor($http,$q, API_VEHICULE) {
        this.$http = $http
        this.apiUrlVehicule = API_VEHICULE
    }

    getVehicules() {
        return this.$http.get(this.apiUrlVehicule+'listerVehicule')
            .then(response => response.data)
    }

    getNbCategorie() {
        return this.$http.get(this.apiUrlVehicule+'categories')
            .then(response => response.data)
    }

    createNewVehicule (vehicule) {
        console.log(vehicule)
        /*return this.$http.post( this.apiUrlVehicule+'ajouterVoiture', vehicule)
        .then(response => response.data)    */
    }
}
