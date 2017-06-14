package dev.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import dev.entity.Adresse;
import dev.repository.AdresseRepository;

@RestController
@RequestMapping("/adresses")
public class AdresseController {
	
	@Autowired private AdresseRepository adresseRepository;
	
	
	@GetMapping
	public List<Adresse> listerAdresses() {

	return this.adresseRepository.findAll();

	}

	
}
