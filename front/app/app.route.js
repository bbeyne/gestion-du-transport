export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/collaborateur/reservations', {
        template: '<menu></menu> <reservations></reservations>',
        requireAuth: true,
        authorizeRole: ["CHAUFFEUR", "ADMIN", "COLLABORATEUR"]
    })
    .when('/collaborateur/reservations/creer', {
        template: '<menu></menu> <reservationscreer></reservationscreer>',
        requireAuth: true,
        authorizeRole: ["CHAUFFEUR", "ADMIN", "COLLABORATEUR"]
    })

    .when('/collaborateur/annonces', {
        template: '<menu></menu> <annonces></annonces>',
        requireAuth: true,
        authorizeRole: ["CHAUFFEUR", "ADMIN", "COLLABORATEUR"]
    })
        .when('/collaborateur/annonces/creer', {
        template: '<menu></menu> <annoncescreer></annoncescreer>',
        requireAuth: true,
        authorizeRole: ["CHAUFFEUR", "ADMIN", "COLLABORATEUR"]
    })
    .when('/admin/vehicules', {
        template: `
            <menu></menu>
            <vehicules></vehicules>
        `,
        requireAuth: true,
        authorizeRole: ["ADMIN"]
    })
    .when('/admin/vehicules', {
        template:
        `
            <menu></menu>
            <vehicules></vehicules>
        `,
        requireAuth: true,
        authorizeRole: ["ADMIN"]
    })
    .when('/connexion',{
        template: '<login></login>'
    })
    .when('/admin/vehicules/immatriculation',{
        template:
        `
            <menu></menu>
            <detail-vehicules></detail-vehicules>
        `
    })

    .otherwise({
        redirectTo: '/collaborateur/reservations'
    });

}
