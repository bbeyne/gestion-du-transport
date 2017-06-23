import template from './reservations.creer.component.html';



class controller {
        

    constructor(ReservationService, LibrairieMapsService, $scope,$location, LoginService, VehiculesService, ReservationVehiculeService,moment,  AnnoncesService) {

        this.ReservationService = ReservationService;
        this.LoginService=LoginService
        this.LibrairieMapsService = LibrairieMapsService
        this.ReservationVehiculeService=ReservationVehiculeService
        this.$scope = $scope
        this.VehiculesService=VehiculesService;
        this.AnnoncesService = AnnoncesService;
        this.currentPage = 1;
        this.totalItems=0;
        this.moment=moment;
        this.dispo=true;
        this.$location=$location
        this.nouvelleReservVoit={
            dateHeureDebut: "",
            dateHeureFin: "",
            voiture: "",
            profil: ""
        }
    }

    $onInit() {
        this.afficheCovoit=this.ReservationService.getAffiche();
        this.$scope = this.LibrairieMapsService.adresseAutoComplet(this.$scope)
        this.VehiculesService.getVehicules()
            .then(vehicules => {this.vehicules = vehicules
                this.totalItems = this.vehicules.length;
        })

        this.AnnoncesService.getAnnoncesAfterDate()
            .then(annonces => this.annonces = annonces)
    }


    changePage(num) {
            this.currentPage = (this.currentPage+num+this.totalItems)%this.totalItems+1;
            this.ReservationVehiculeService.getReservationsbyVoiture(this.vehicules[this.currentPage-1].id)
                .then(reservationsVehicule=> {this.reservationsVehicule=reservationsVehicule
                    this.car=this.reservationsVehicule[0]
                })


    }

    afficherCovoit(){

        this.afficheCovoit = !this.afficheCovoit;

    }
    Reserver(){
        let nouvelleReservVoit = angular.copy(this.nouvelleReservVoit)
        nouvelleReservVoit.dateHeureFin=this.moment(new Date(this.dateRetour.getFullYear(),this.dateRetour.getMonth(),this.dateRetour.getDate(),this.heureRetour,this.minuteRetour,0)).format('DD/MM/YYYY hh:mm:ss')
        nouvelleReservVoit.dateHeureDebut=this.moment(new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate(),this.heure,this.minute,0)).format('DD/MM/YYYY hh:mm:ss')
        nouvelleReservVoit.voiture=this.vehicules[this.currentPage-1]
        nouvelleReservVoit.profil=this.LoginService.LoadCookie();
        this.ReservationVehiculeService.createNewReservVoit(nouvelleReservVoit);
        this.$location.path('/collaborateur/reservations');
    }



    ajouterReservation(reserv)  {
        
        this.reservation = {
            statut:"EN_COURS",
            idAnnonce :"",
            idPersonne:""
        }
      
        this.reservation.idAnnonce=reserv
        this.reservation.idPersonne = this.LoginService.LoadCookie()
        this.ReservationService.postNewReservation(this.reservation)
        this.$location.path('/collaborateur/reservations');
}

  
}

export let ReservationsCreerComponent = {
    template,
    controller,
    bindings: {
    }
};
