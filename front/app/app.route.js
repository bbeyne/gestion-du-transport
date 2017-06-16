export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        template: '<accueil></accueil>',
        requireAuth: true,
        authorizeRole: ["CHAUFFEUR", "ADMIN", "COLLABORATEUR"] 
    })
    .when('/collaborateur/reservations', {
        template: '<reservations></reservations>',
        requireAuth: true,
        authorizeRole: ["CHAUFFEUR", "ADMIN", "COLLABORATEUR"] 
    })

    .when('/collaborateur/annonces', {
        template: '<annonces></annonces>',
        requireAuth: true,
        authorizeRole: ["CHAUFFEUR", "ADMIN", "COLLABORATEUR"] 
    })
    .when('/admin/vehicules', {
        template: '<vehicules></vehicules>',
        requireAuth: true,
        authorizeRole: ["CHAUFFEUR", "ADMIN", "COLLABORATEUR"] 
    })
    .when('/connexion',{
        template: '<login></login>'
    })
    .otherwise({
        redirectTo: '/connexion'
    });

}
