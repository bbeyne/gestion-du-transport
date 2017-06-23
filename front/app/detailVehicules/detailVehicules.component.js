import template from './detailVehicules.component.html';

class controller {
    constructor ($location,VehiculesService,ReservationVehiculeService,MenuService) {
        this.$location=$location
        this.VehiculesService=VehiculesService
        this.MenuService=MenuService
        this.ReservationVehiculeService=ReservationVehiculeService
        this.immatriculation=this.$location.$$hash
        this.tabMatricule=[]
        this.vehicules=[]
        this.isReserv=false
        this.isHisto=false
    }

    $onInit(){
        this.getVehicules()
    }


    getVehicules(){
        this.VehiculesService.getVehicules()
            .then(vehicules => this.vehicules = vehicules)
            .then(v => {
                this.getVehiculeId()
        })

    }

    getVehiculeId(){
        this.vehicules.forEach(v=>{
            if(v.immatriculation===this.immatriculation){
                this.getReservations(v.id)
                this.getHistoriqueByVoiture(v.id)
            }})
    }

    getHistoriqueByVoiture(id){
        this.ReservationVehiculeService.getHistoriqueByVoiture(id)
            .then(historiqueReservations => this.historiqueReservations = historiqueReservations)
            .then(p=>{
                this.historiqueReservations.forEach(h => this.tabMatricule.push(h.profil.matricule))
                if(this.historiqueReservations[0]){
                    this.isHisto=true
                }
            })
            .then(p=> {
            this.tabMatricule.forEach( m=>this.getChauffeur(m))
        })

    }

    getReservations(id){
      this.ReservationVehiculeService.getReservationsbyVoiture(id)
            .then(reservations => this.prochainesReservations = reservations)
            .then(v=>{  if(this.prochainesReservations[0]){
                        this.isReserv=true
            }

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
