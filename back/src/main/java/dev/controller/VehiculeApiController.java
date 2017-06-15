package dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.entity.Voiture;
import dev.repository.VehiculeRepository;

@RestController
@RequestMapping("/admin/vehicule")
public class VehiculeApiController {
	@Autowired private VehiculeRepository vehiculeRepo;

	@GetMapping(path="/listerVehicule")
	public List<Voiture> listeVehicule() {
		return this.vehiculeRepo.findAll();
	}
}
