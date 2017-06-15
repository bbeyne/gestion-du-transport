import template from './login.component.html';

class controller {
    constructor (LoginService) {

        this.LoginService = LoginService

    }

    authentif (form) {
    	if (form.$invalid) return
        this.LoginService.Authentification(this.email,this.password)
        .then(profil => this.profil = profil)

    }
}

export let LoginComponent = {
    template,
    controller,
    bindings: {
    }
};
