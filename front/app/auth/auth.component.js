class controller {
  constructor (LoginService, $location, $scope) {
    this.LoginService = LoginService
    this.$location = $location
    this.profil=""

    $scope.$on('$routeChangeStart', (angularEvent, newUrl) => {
      this.profil=this.LoginService.LoadCookie()
      console.log('auth profil', this.profil)
      if (newUrl.requireAuth) {
        if (this.profil === undefined) {
          $location.path('connexion')
        }
        if (!newUrl.authorizeRole.includes(this.profil.type)){
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
