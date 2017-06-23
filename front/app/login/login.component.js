import template from './login.component.html';

class controller {
    constructor (LoginService,$location) {
        this.$location=$location
        this.LoginService = LoginService
        this.type=''
    }

    authentif (form) {
        this.LoginService.Authentification(this.email,this.password)
        .then(profil => {
            this.type=profil.type;
            if (this.type !== 'INCONNU'){
            this.LoginService.SaveCookie(profil);
            this.type=profil.type;
            this.$location.path('/');
            }
        });
    }

}

export let LoginComponent = {
    template,
    controller,
    bindings: {
    }
};
