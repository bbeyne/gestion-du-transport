export class MenuService {
    constructor($http, API_HISTORIQUE) {
        this.$http = $http
        this.apiUrlHisto = API_HISTORIQUE

    }

    getChauffeur(matricule){
        return this.$http.get(this.apiUrlHisto+"/chauffeur?matricule="+matricule)
            .then(response => response.data)
    }

}

