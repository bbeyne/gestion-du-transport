import template from './auth.component.html'

class controller {
  constructor (LoginService, $location, $scope) {
    console.log('constructor')
    this.LoginService = LoginService
    this.$location = $location

    $scope.$on('$routeChangeStart', (angularEvent, newUrl) => {
      let profil = this.LoginService.LoadCookie()
      console.log('auth profil', profil)
      if (newUrl.requireAuth) {
        if (profil === undefined || !newUrl.authorizeRole.includes(profil.type)) {
          console.log('nope!')
          $location.path('login')
        }
      } else {
        console.log('free')
      }
    })
  }
}

export let AuthComponent = {
  template,
  controller,
  bindings: {
  }
}