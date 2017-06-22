import template from './annonces.component.html';

class controller {
    constructor(AnnoncesService) {
        this.AnnoncesService = AnnoncesService;
        this.viewby = 10;
        this.totalItems = 0;
        this.currentPage = 1;
        this.itemsPerPage = 1;
        this.maxSize = 0;
        this.pages = [];

        // this.$uibModal = $uibModal;

    }

    $onInit() {
        this.AnnoncesService.getReservations()
            .then(annonces => this.annonces = annonces);

        this.AnnoncesService.getHistorique()
            .then(historiques => {
                this.historiques = historiques;
                this.totalItems = this.historiques.length;
                this.maxSize = Math.ceil(this.totalItems / this.itemsPerPage);
                for (var i = 1; i <= this.maxSize; i++) {
                    this.pages.push(i);
                }
            });
            console.log("init ok");
    }
    changePage(num) {
        if ( !(num ===0 || num > this.maxSize) ) {
                    this.currentPage = num;
        }

    }

    //
    // ouvrirPopUP() {
    //     this.$uibModal.open({
    //         animation: true,
    //         template: templateAddVehicule,
    //         controller:
    //             //**********************************************************
    //             //A mettre dans un nouveau controller
    //             function ($uibModalInstance, VehiculesService) {
    //                 this.VehiculesService = VehiculesService;
    //                 this.vehicules= {
    //                     id:"",
    //                     categorie:"",
    //                     immatriculation:"",
    //                     marque:"",
    //                     modele:"",
    //                     nbPlaces:0,
    //                     statut:"EN_SERVICE",
    //                     urlImage:"",
    //                     idCoordonneesId:""
    //                 };
    //
    //                 this.VehiculesService.getNbCategorie()
    //                     .then(nbCategorie => this.categories = nbCategorie);
    //
    //                 this.fermer = () => {
    //                     $uibModalInstance.dismiss('cancel');
    //                 };
    //                 this.ajouterVehicule = (infoForm) => {
    //
    //                     this.vehicules.immatriculation=infoForm.immatriculationInput.$modelValue;
    //                     this.vehicules.modele=infoForm.modeleInput.$modelValue;
    //                     this.vehicules.marque=infoForm.marqueInput.$modelValue;
    //                     this.vehicules.categorie=infoForm.selectCategorie.$modelValue.trim();
    //                     this.vehicules.nbPlaces=infoForm.nbPlaceInput.$modelValue;
    //                     this.vehicules.urlImage=infoForm.urlImageInput.$modelValue;
    //
    //                     if(this.VehiculesService.verifImmat(infoForm.immatriculationInput.$modelValue)){
    //                         this.VehiculesService.createNewVehicule(this.vehicules);
    //                         setTimeout(function(){
    //                             window.location.reload();
    //                             this.fermer();
    //                         },500);
    //                     }else{
    //
    //                         this.immatInvalid=true;
    //                     }
    //
    //                 };
    //             },
    //         //*****************************************************
    //
    //         controllerAs: '$ctrl',
    //         backdrop: false,
    //     }).result.catch(function (res) {
    //         if (!(res === 'cancel' || res === 'escape key press' || res === 'backdrop click')) {
    //             throw res;
    //         }
    //     });
    // }
    //


}

export let AnnoncesComponent = {
    template,
    controller,
    bindings: {

    }
};
