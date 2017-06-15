import angular from 'angular';
import RouteModule from 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';

import { AccueilComponent } from './accueil/accueil.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { VehiculesComponent } from './vehicules/vehicules.component';

import { ReservationService } from './reservations/reservations.service';
import { AnnoncesService } from './annonces/annonces.service';

import { VehiculesService } from './vehicules/vehicules.service';
import { DetailController } from './reservations/detailsReservation.controller';



//Création du module app
angular.module('app', [RouteModule])

.value( 'API_URL', API_URL)
.value('API_RESERVATION', API_URL + "/collaborateur/reservations/encours" )
.value('API_HISTORIQUE', API_URL + "/collaborateur/reservations/historique" )
.value('API_VEHICULE', API_URL + "/admin/vehicule/listerVehicule" )

.component('accueil', AccueilComponent)
.component('reservations', ReservationsComponent)
.component('annonces', AnnoncesComponent)
.component('vehicules', VehiculesComponent)
.controller('detailReservation', DetailController)

.service('ReservationService', ReservationService)
.service('AnnoncesService', AnnoncesService)
.service('VehiculesService', VehiculesService)

.config(route);
