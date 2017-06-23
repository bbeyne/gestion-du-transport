export class LoginService {
    constructor($http, $q, API_URL, $cookies) {
        this.$http = $http
        this.$q = $q
        this.apiUrl = API_URL
        this.$cookies=$cookies

    }
    /**
    Verification des donnees d'authentification
    */
    Authentification(email, password) {
        return this.$http.get(this.apiUrl+ "/connexion?email="+email+"&password="+password)
            .then(response => response.data)
    }
    /**
    Enregistrement du profil dans le cookie
    */
    SaveCookie(profil){
    	this.$cookies.putObject('profil',profil)
    }
    /**
    suppression du profil dans le cookie
    */
    RemoveCookie(){
    	return this.$cookies.remove('profil')
    }
    /**
    Retourne le profil qui est dans le cookie
    */
    LoadCookie(){
    	return this.$cookies.getObject('profil')
    }
}
