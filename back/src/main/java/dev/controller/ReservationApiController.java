package dev.controller;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import javax.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import dev.entity.Reservation;
import dev.repository.ReservationRepository;



@RestController
@RequestMapping("/collaborateur/reservations")
public class ReservationApiController {
	
	@Autowired
	private ReservationRepository reservationRepo;
	
	
	@GetMapping(path="/encours")
	public List<Reservation> listeReservation(@PathParam(value="matricule") String matricule) {
		return this.reservationRepo.findAll()
				.stream()
				.filter(d->d.getIdPersonne().getMatricule().equals(matricule))
				.filter(d->d.getIdAnnonce().getDateHeureDepart().isAfter(LocalDateTime.now()))
				.collect(Collectors.toList());
	}
	

	@GetMapping(path="/historique")
	public List<Reservation> listeHistorique(@PathParam(value="matricule") String matricule) {
		return this.reservationRepo.findAll()
				.stream()
				.filter(d->d.getIdPersonne().getMatricule().equals(matricule))
				.filter(d->d.getIdAnnonce().getDateHeureDepart().isBefore(LocalDateTime.now()))
				.collect(Collectors.toList());
	}
	
}
