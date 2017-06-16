import template from './login.component.html';

class controller {
    constructor (LoginService,$location) {
        this.$location=$location
        this.LoginService = LoginService
    }

    authentif (form) {
        this.LoginService.Authentification(this.email,this.password)
        .then(profil => this.LoginService.SaveCookie(profil))
        .then(() => this.$location.path('/'))
    }
    deconnection(){
        console.log("ddd")
        this.LoginService.RemoveCookie().then(() => this.$location.path('/connexion'))
    }
}

export let LoginComponent = {
    template,
    controller,
    bindings: {
    }
};
