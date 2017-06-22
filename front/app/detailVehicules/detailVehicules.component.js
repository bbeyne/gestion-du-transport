import template from './detailVehicules.component.html';

class controller {
    constructor ($location,VehiculesService,ReservationVehiculeService,MenuService) {
        this.$location=$location
        this.VehiculesService=VehiculesService
        this.MenuService=MenuService
        this.ReservationVehiculeService=ReservationVehiculeService
        this.immatriculation=this.$location.$$hash
        this.tabMatricule=[]
        this.tab=[]
    }

    $onInit(){
        this.getVehicules()
        this.getHistorique()
    }

    getVehicules(){
        this.VehiculesService.getVehicules()
            .then(vehicules => this.vehicules = vehicules)
    }

    getHistorique(){
        this.ReservationVehiculeService.getHistorique()
            .then(historiqueReservations => this.historiqueReservations = historiqueReservations)
            .then(p=>{
                this.historiqueReservations.forEach(h => this.tabMatricule.push(h.profil.matricule))
            })
            .then(p=> {
            this.tabMatricule.forEach( m=>
                this.getChauffeur(m)
            )
        })
    }

    getChauffeur(matricule){
        this.MenuService.getChauffeur(matricule)
            .then(m => this.profile = m)
    }

    goBack(){
        window.history.back()
    }
}




export let DetailVehiculesComponent = {
    template,
    controller,
    bindings: {

    }
};
