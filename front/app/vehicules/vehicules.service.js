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
        console.log("post :",vehicule)
        return this.$http.post( this.apiUrlVehicule+'ajouterVoiture', vehicule)
        .then(response => response.data)
    }


    verifImmat(immatriculation){
        let reponse;
        let reg=/[A-Z]{2}-\d{3}-[A-Z]{2}/
        reg.test(immatriculation) ? reponse=true : reponse=false
        return reponse
    }


}
