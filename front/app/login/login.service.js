export class LoginService {
    constructor($http, $q, API_URL, $cookies) {
        this.$http = $http
        this.$q = $q
        this.apiUrl = API_URL
        this.$cookies=$cookies

    }

    Authentification(email, password) {
        return this.$http.get(this.apiUrl+ "/connexion?email="+email+"&password="+password)
            .then(response => response.data)
    }
    SaveCookie(profil){
    	this.$cookies.putObject('profil',profil)
    }
    RemoveCookie(){
    	return this.$cookies.remove('profil')
    }
    LoadCookie(){
    	return this.$cookies.getObject('profil')
    }
}
