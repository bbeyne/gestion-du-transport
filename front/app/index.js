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

import { LoginComponent } from './login/login.component';


const API = API_URL || "http://localhost:8080"

//Création du module app
angular.module('app', [RouteModule])


.value( 'API_URL', API)
.value('API_RESERVATION', API + "/collaborateur/reservations/encours" )
.value('API_HISTORIQUE', API + "/collaborateur/reservations/historique" )
.value('API_VEHICULE', API + "/admin/vehicule/" )

.component('accueil', AccueilComponent)
.component('reservations', ReservationsComponent)
.component('annonces', AnnoncesComponent)
.component('vehicules', VehiculesComponent)
.component('login',LoginComponent)



.service('ReservationService', ReservationService)
.service('AnnoncesService', AnnoncesService)
.service('VehiculesService', VehiculesService)

.controller('detailReservation', DetailController)

.config(route);
