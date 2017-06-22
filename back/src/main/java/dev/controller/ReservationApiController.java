package dev.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import javax.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.entity.Personne;
import dev.entity.ReservVehicule;
import dev.entity.Reservation;
import dev.repository.ReservVehiculeRepository;
import dev.repository.ReservationRepository;
import dev.service.PersonneService;



@RestController
@RequestMapping("/collaborateur/reservations")
public class ReservationApiController {
	
	@Autowired
	private ReservationRepository reservationRepo;
	@Autowired
	private PersonneService persoServ;
	@Autowired
	private ReservVehiculeRepository reservVehiculeRepo;
	
	@GetMapping(path="/encours")
	public List<Reservation> listeReservation(@PathParam(value="matricule") String matricule) {

		return this.reservationRepo.findAll()
				.stream()
				.filter(d->d.getIdPersonne().getMatricule().equals(matricule))
				.filter(d->d.getIdAnnonce().getDateHeureDepart().isAfter(LocalDateTime.now()))
				.collect(Collectors.toList());
	}
	@GetMapping(path="/historique/chauffeur")
	public Personne NomChauffeur(@PathParam(value="matricule") String matricule) {
		return persoServ.PersonneByMatricule(matricule);
	}

	@GetMapping(path="/historique")
	public List<Reservation> listeHistorique(@PathParam(value="matricule") String matricule) {
		return this.reservationRepo.findAll()
				.stream()
				.filter(d->d.getIdPersonne().getMatricule().equals(matricule))
				.filter(d->d.getIdAnnonce().getDateHeureDepart().isBefore(LocalDateTime.now()))
				.collect(Collectors.toList());
	}
	@GetMapping(path="/Vehicule/encoursVehicule")
	public List<ReservVehicule> listeReservationVehicule(@PathParam(value="vehiculeId") int vehiculeId) {
		return this.reservVehiculeRepo.findAll()
				.stream()
				.filter(d->d.getVoiture().getId()==vehiculeId)
				.filter(d->d.getDateHeureDebut().isAfter(LocalDateTime.now()))
				.collect(Collectors.toList());
	}
	@GetMapping(path="/Vehicule/historique")
	public List<ReservVehicule> listeHistoriqueVehicule(@PathParam(value="matricule") String matricule) {
		return this.reservVehiculeRepo.findAll()
				.stream()
				.filter(d->d.getProfil().getMatricule().equals(matricule))
				.filter(d->d.getDateHeureDebut().isBefore(LocalDateTime.now()))
				.collect(Collectors.toList());
	}

	@GetMapping(path="/Vehicule/encours")
	public List<ReservVehicule> listeReservationVehicule(@PathParam(value="matricule") String matricule) {
		return this.reservVehiculeRepo.findAll()
				.stream()
				.filter(d->d.getProfil().getMatricule().equals(matricule))
				.filter(d->d.getDateHeureDebut().isAfter(LocalDateTime.now()))
				.collect(Collectors.toList());
	}

	@PostMapping("/Vehicule/encours/ajouterReserv")
    public void addMission(@RequestBody ReservVehicule r) {
		reservVehiculeRepo.save(r);

	}
	
	@PostMapping("/ajouterReservation")
    public void addReservation(@RequestBody Reservation r) {
		reservationRepo.save(r);

    }
}
