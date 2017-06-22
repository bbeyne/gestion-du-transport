import template from './menu.component.html';

class controller {
    constructor (LoginService,$location,$scope, MenuService) {
        this.LoginService = LoginService
        this.MenuService=MenuService
        this.$location= $location
        this.$scope=$scope
    }
    $onInit () {
        this.type=this.LoginService.LoadCookie().type
        this.$scope.isActive = function (viewLocation) {
            return viewLocation === this.$location.path()
        }.bind(this)
        this.getProfil(this.LoginService.LoadCookie().matricule)
    }


    getProfil(matricule){
        this.MenuService.getChauffeur(matricule)
            .then(m => this.profile = m)
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
