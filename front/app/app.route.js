export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        template: '<accueil></accueil>'
    })
    .when('/collaborateur/reservations', {
        template: '<reservations></reservations>'
    })

    .when('/collaborateur/annonces', {
        template: '<annonces></annonces>'
    })
    .when('/admin/vehicules', {
        template: '<vehicules></vehicules>'

    .when('/connexion',{
        template: '<login></login>'
    })
    .otherwise({
        redirectTo: '/'
    });

}
