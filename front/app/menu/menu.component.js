import template from './menu.component.html';

class controller {
    constructor (LoginService,$location) {
        this.LoginService = LoginService;
        this.$location= $location;
    }
    $onInit () {
        this.type=this.LoginService.LoadCookie().type;
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
