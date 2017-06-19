class controller {
  constructor (LoginService, $location, $scope) {
    this.LoginService = LoginService
    this.$location = $location

    $scope.$on('$routeChangeStart', (angularEvent, newUrl) => {
      let profil = this.LoginService.LoadCookie()
      console.log('auth profil', profil)
      if (newUrl.requireAuth) {
        if (profil === undefined) {
          $location.path('connexion')
        }
        if (!newUrl.authorizeRole.includes(profil.type)){
          $location.path('/')
        }
      }
    })
  }
}

export let AuthComponent = {
  controller,
  bindings: {
  }
}
