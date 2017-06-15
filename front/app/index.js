import angular from 'angular';
import RouteModule from 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';
import { AccueilComponent } from './accueil/accueil.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationService } from './reservations/reservations.service';
import { AnnoncesComponent } from './annonces/annonces.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { AnnoncesService } from './annonces/annonces.service';


//Création du module app
angular.module('app', [RouteModule])

.value( 'API_URL', API_URL)
.value('API_RESERVATION', API_URL + "/collaborateur/reservations" )



.component('accueil', AccueilComponent)
.component('reservations', ReservationsComponent)
.component('annonces', AnnoncesComponent)
.component('vehicules', VehiculesComponent)

.service('ReservationService', ReservationService)
.service('AnnoncesService', AnnoncesService)

.config(route);
