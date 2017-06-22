import template from './annonces.creer.component.html';

class controller {
    constructor(AnnoncesService, LibrairieMapsService, $scope) {
        this.$scope = $scope;
        this.LibrairieMapsService = LibrairieMapsService;


        this.AnnoncesService = AnnoncesService;

        this.adresseDepart = {
            numRue: "",
            libelle: "",
            nomRue: "",
            ville: "",
            codePostale: "",
            pays: "France"
        };

        this.adresse = {
            numRue: "",
            libelle: "",
            nomRue: "",
            ville: "",
            codePostale: "",
            pays: "France"
        };

        this.annonce = {
            adresseDepart: this.adresseDepart,
            adresseDestination: this.adresseDestination,
            immatriculation: "",
            marque: "",
            modele: "",
            nbPlace: "",
            date: "",
            heure: "",
            minute: "",
        };
    }

    $onInit() {
        this.AnnoncesService.getReservations()
            .then(annonces => this.annonces = annonces);
    }
    changePage(num) {
        if (!(num === 0 || num > this.historiques.length - 1)) {
            this.currentPage = num;
        }
    }
    detailAnnonce() {
        window.open('details.html', 'details', 'menubar=no, scrollbars=no, top=200, left=400, width=500, height=400');
    }

    test() {
        console.log("test");
    }

    publierAnnonce(infoForm) {

        console.log("post entrée");



        this.annonce.adresseDepart = infoForm.adresseDepart. $modelValue.trim();
        this.annonce.adresseDestination = infoForm.adresseDestination.$modelValue.trim();
        this.annonce.immatriculation = infoForm.immatriculation.$modelValue;
        this.annonce.marque = infoForm.marque.$modelValue;
        this.annonce.modele = infoForm.modele.$modelValue;
        this.annonce.nbPlaces = infoForm.nbPlaces.$modelValue;
        this.annonce.date = infoForm.date.$modelValue;
        this.annonce.heure = infoForm.heure.$modelValue;
        this.annonce.minute = infoForm.minute.$modelValue;

        this.AnnoncesService.createNewAnnonce(this.annonce);

        // if(this.AnnoncesService.verifImmat(infoForm.immatriculation.$modelValue)){
        //     // this.AnnoncesService.createNewAnnonce(this.annonce);
        //     /*Redirection apres envoi*/
        //     // setTimeout(function(){
        //     //     window.location.reload();
        //     //     this.fermer();
        //     // },500);
        // }else{
        //
        //     //this.immatInvalid=true;
        // }

        console.log("post OK");

    }

}

export let AnnoncesCreerComponent = {
    template,
    controller,
    bindings: {

    }
};
