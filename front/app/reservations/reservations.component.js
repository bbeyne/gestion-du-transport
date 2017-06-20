import template from './reservations.component.html';
import templateModal from './detailsResa.html';
import './reservations.component.css'



class controller {
    constructor (ReservationService, ReservationVehiculeService, $uibModal) {

        this.ReservationService = ReservationService
        this.ReservationVehiculeService = ReservationVehiculeService;
        this.$uibModal = $uibModal
        this.viewby = 10;
        this.totalItems = 0;
        this.currentPage = 1;
        this.itemsPerPage = 2;
        this.maxSize = 0;
        this.pages = [];
        this.totalItemsV = 0;
        this.currentPageV = 1;
        this.itemsPerPageV = 2;
        this.maxSizeV = 0;
        this.pagesV = [];
    }

    $onInit () {

        this.afficheCovoit=this.ReservationService.getAffiche();
        this.ReservationService.getReservations()
        .then(reservations => this.reservations = reservations)
        this.ReservationService.getHistorique()
        .then(historiques =>{
            this.historiques  = historiques;
            this.totalItems = this.historiques.length;
            this.maxSize = Math.ceil(this.totalItems / this.itemsPerPage);

            for (var i = 1; i <= this.maxSize; i++) {
                this.pages.push(i);
            }
        })
        this.ReservationVehiculeService.getReservations()
        .then(reservationsVehicule =>this.reservationsVehicule = reservationsVehicule)
        this.ReservationVehiculeService.getHistorique()
        .then(historiques =>{
            this.historiquesVehicule  = historiques;
            this.totalItemsV = this.historiquesVehicule.length;
            this.maxSizeV = Math.ceil(this.totalItemsV / this.itemsPerPageV);

            for (var i = 1; i <= this.maxSizeV; i++) {
                this.pagesV.push(i);
            }
        })
    }

    changePage(num) {
        if ( !(num ===0 || num > this.historiques.length-1) ) {
            this.currentPage = num;
        }
    }
    changePageV(num){
        if ( !(num ===0 || num > this.historiquesVehicule.length-1) ) {
            this.currentPageV = num;
        }
    }
    afficherCovoit(){
        this.ReservationService.ChangeAffiche();
        this.afficheCovoit=this.ReservationService.getAffiche();
    }
   detailsReservation(historique){


        this.$uibModal.open({
           
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            template: templateModal,
            controller: function($uibModalInstance,ReservationService) {
                 this.unHistorique = historique;
                 ReservationService.getChauffeur(this.unHistorique.idAnnonce.idProfil.matricule)
                    .then(chauffeur => this.chauffeur=chauffeur)
                 this.fermer = () => {
                        $uibModalInstance.dismiss('cancel');
                 }
            
                
            },
            controllerAs: '$ctrl',
            backdrop:false
           
    })
    .result.catch(function (res) {
           if (!(res === 'cancel' || res === 'escape key press' || res === 'backdrop click')) {
               console.log(res)
               throw res;
           }
       });

   }
}



export let ReservationsComponent = {
    template,
    controller,
    bindings: {

    }
};
