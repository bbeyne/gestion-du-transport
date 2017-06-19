import template from './reservations.component.html';
import templateModal from './detailsResa.html';



class controller {
    constructor (ReservationService, $uibModal) {

        this.ReservationService = ReservationService
        this.$uibModal = $uibModal
        this.viewby = 10;
        this.totalItems = 0;
        this.currentPage = 1;
        this.itemsPerPage = 2;
        this.maxSize = 0;
        this.pages = [];

    }

    $onInit () {
        this.ReservationService.getReservations()
        .then(reservations =>this.reservations = reservations)
        this.afficheCovoit=this.ReservationService.getAffiche();
        this.ReservationService.getHistorique()
        .then(historiques =>{
            this.historiques  = historiques;
            this.totalItems = this.historiques.length;
            this.maxSize = Math.ceil(this.totalItems / this.itemsPerPage);

            for (var i = 1; i <= this.maxSize; i++) {
                this.pages.push(i);
            }
        })
    }

    changePage(num) {
        if ( !(num ===0 || num > this.historiques.length-1) ) {
            this.currentPage = num;
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
