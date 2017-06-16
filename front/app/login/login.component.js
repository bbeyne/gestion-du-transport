import template from './login.component.html';

class controller {
    constructor (LoginService) {

        this.LoginService = LoginService
    }

    authentif (form) {
        this.LoginService.Authentification(this.email,this.password)
        .then(profil => this.LoginService.SaveCookie(profil))
    }
}

export let LoginComponent = {
    template,
    controller,
    bindings: {
    }
};
