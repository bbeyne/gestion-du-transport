export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        template: '<accueil></accueil>'
    })
    .when('/collaborateur/reservations', {
        template: '<reservations></reservations>'
    })
    .otherwise({
        redirectTo: '/'
    });

}
