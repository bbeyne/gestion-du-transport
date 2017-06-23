import template from './login.component.html';

class controller {
    constructor (LoginService,$location) {
        this.$location=$location
        this.LoginService = LoginService
        this.type=''
    }
    /**
    * methode qui prend les donnees passe dans le formulaire, lverifie les infos avec le service 
    * puis enregistre le profil s'il est trouve
    */
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
