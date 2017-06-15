export class LoginService {
    constructor($http, $q, API_URL) {
        this.$http = $http
        this.$q = $q
        this.apiUrl = API_URL

    }

    Authentification(email, password) {
        return this.$http.get(this.apiUrl+ "/connexion?email="+email+"&password="+password)
            .then(response => response.data)
    }
}
