import angular from 'angular';
import ngCookies from 'angular-cookies'
import RouteModule from 'angular-route';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js';
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';

import { AccueilComponent } from './accueil/accueil.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { LoginComponent } from './login/login.component';

import { ReservationService } from './reservations/reservations.service';
import { AnnoncesService } from './annonces/annonces.service';
import { VehiculesService } from './vehicules/vehicules.service';
import { LoginService } from './login/login.service';

const API = API_URL || "http://localhost:8080"


//Création du module app
angular.module('app', [RouteModule, ngCookies,'ui.bootstrap'])

.value( 'API_URL', API)
.value('API_RESERVATION', API + "/collaborateur/reservations/encours" )
.value('API_HISTORIQUE', API + "/collaborateur/reservations/historique" )
.value('API_VEHICULE', API + "/admin/vehicule/" )
.value('API_ANNONCE', API + "/collaborateur/annonces/encours" )
.value('API_ANNONCE_HISTORIQUE', API + "/collaborateur/annonces/historique" )

.component('accueil', AccueilComponent)
.component('reservations', ReservationsComponent)
.component('annonces', AnnoncesComponent)
.component('vehicules', VehiculesComponent)
.component('login',LoginComponent)

.service('LoginService', LoginService)
.service('ReservationService', ReservationService)
.service('AnnoncesService', AnnoncesService)
.service('VehiculesService', VehiculesService)

.config(route);


