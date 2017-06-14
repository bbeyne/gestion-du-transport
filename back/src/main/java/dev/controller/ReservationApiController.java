package dev.controller;
import java.util.List;

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
	
	@GetMapping
	public List<Reservation> listereservation() {
		return this.reservationRepo.findAll();
	}
	
}
