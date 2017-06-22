package dev.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import dev.entity.Voiture;

import dev.repository.VoitureRepository;

@RestController
@RequestMapping("/admin/vehicule")
public class VehiculeApiController {
	@Autowired private VoitureRepository voitureRepo;

	@GetMapping(path="/listerVehicule")
	public List<Voiture> listeVehicule() {
		return this.voitureRepo.findAll();
	}
	@GetMapping(path="/categories")
	public List<Voiture.CATEGORIE> listeCategorie() {
		return Arrays.asList(Voiture.CATEGORIE.values());
	}

	@PostMapping("/ajouterVoiture")
    public void addMission(@RequestBody Voiture v) {
		voitureRepo.save(v);
    }
}
