import template from './menu.component.html';

class controller {
    constructor (LoginService,$location,$scope) {
        this.LoginService = LoginService
        this.$location= $location
        this.$scope=$scope
    }
    $onInit () {
        this.type=this.LoginService.LoadCookie().type

        this.$scope.isActive = function (viewLocation) {
            return viewLocation === this.$location.path()
        }.bind(this)
    }
    deconnection(){
        this.LoginService.RemoveCookie()
        this.$location.path('/connexion')
    }
}

export let MenuComponent = {
    template,
    controller,
    bindings: {
    }
};
