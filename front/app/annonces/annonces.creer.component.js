import template from './annonces.creer.component.html';

class controller {
    constructor(AnnoncesService, LibrairieMapsService, $scope, moment, LoginService,$location) {
        this.$scope = $scope;
        this.LibrairieMapsService = LibrairieMapsService;
        this.LoginService= LoginService;
        this.$location=$location

        this.moment = moment;

        this.AnnoncesService = AnnoncesService;

        // this.adresse = {
        //     numRue: "",
        //     libelle: "",
        //     nomRue: "",
        //     ville: "",
        //     codePostale: "00000",
        //     pays: "France"
        // };

        this.annonce = {
            adresseDepart: this.adresseDepart,
            adresseArrivee: this.adresseArrivee,
            profil: {},
            immatriculation: "",
            marque: "",
            modele: "",
            nbPlacesDispo: "",
            dateHeureDepart: "",
            statut: null
        };
    }

    $onInit() {
        this.AnnoncesService.getReservations()
            .then(annonces => this.annonces = annonces);

        this.$scope = this.LibrairieMapsService.adresseAutoComplet(this.$scope);

    }
    changePage(num) {
        if (!(num === 0 || num > this.historiques.length - 1)) {
            this.currentPage = num;
        }
    }
    detailAnnonce() {
        window.open('details.html', 'details', 'menubar=no, scrollbars=no, top=200, left=400, width=500, height=400');
    }



    publierAnnonce(infoForm) {




        this.annonce.adresseArrivee = this.parseAdresse(infoForm.adresseArrivee.$modelValue);



        //this.annonce.adresseDepart = this.adresseDepart;
        //this.annonce.adresseArrivee = infoForm.adresseArrivee.$modelValue;
        this.annonce.immatriculation = infoForm.immatriculation.$modelValue;
        this.annonce.marque = infoForm.marque.$modelValue;
        this.annonce.modele = infoForm.modele.$modelValue;
        this.annonce.nbPlacesDispo = infoForm.nbPlacesDispo.$modelValue;
        this.annonce.heure = infoForm.heure.$modelValue;
        this.annonce.minute = infoForm.minute.$modelValue;
        this.annonce.profil = this.LoginService.LoadCookie();

        this.date = infoForm.dateHeureDepart.$modelValue;

        this.annonce.dateHeureDepart=this.moment(new Date(this.date.getYear(),this.date.getMonth(),this.date.getDate(),infoForm.heure.$modelValue,infoForm.minute.$modelValue)).format('DD/MM/YYYY hh:mm:ss');

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


        this.AnnoncesService.createNewAnnonce(this.annonce);

        this.$location.path('/collaborateur/annonces')
    }

    parseAdresse(adresseModelValue) {

        this.adresse = {
            numRue: "",
            libelle: "",
            nomRue: "",
            ville: "",
            codePostale: "00000",
            pays: "France"
        };

        adresseModelValue.split(',')[0].split(' ');

        let length = adresseModelValue.split(',')[0].split(' ').length;

        this.adresse.numRue = adresseModelValue.split(',')[0].split(' ')[0];
        this.adresse.libelle = adresseModelValue.split(',')[0].split(' ')[1];
        for (let i = 2; i < length; i++) {
            this.adresse.nomRue += (adresseModelValue.split(',')[0].split(' ')[i] + " ");
        }

        this.adresse.ville = adresseModelValue.split(',')[1];
        this.adresse.codePostale = 75000;
        this.adresse.pays = "France";

        return this.adresse;
    }

}

export let AnnoncesCreerComponent = {
    template,
    controller,
    bindings: {

    }
};
