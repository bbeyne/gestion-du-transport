import template from './login.component.html';

class controller {
    constructor (LoginService,$location) {
        this.$location=$location
        this.LoginService = LoginService
    }

    authentif (form) {
        this.LoginService.Authentification(this.email,this.password)
        .then(profil => {
            this.LoginService.SaveCookie(profil);
            this.$location.path('/');
        });
    }

}

export let LoginComponent = {
    template,
    controller,
    bindings: {
    }
};
