import template from './menu.component.html';

class controller {
    constructor (LoginService,$location) {
        this.LoginService = LoginService;
        this.$location= $location;
    }
    deconnection(){
        this.LoginService.RemoveCookie();
        this.$location.path('/connexion');
    }
}

export let MenuComponent = {
    template,
    controller,
    bindings: {
    }
};
