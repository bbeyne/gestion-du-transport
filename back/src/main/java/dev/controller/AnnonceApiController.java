package dev.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.entity.Annonce;
import dev.repository.AnnonceRepository;

@RestController
@RequestMapping("/collaborateur/annonces")
public class AnnonceApiController {

	@Autowired
	private AnnonceRepository annonceRepository;

	@GetMapping(path="/encours")
	public List<Annonce> listeEnCours() {

		return this.annonceRepository.findAll()
				.stream()
				.filter(annonce->annonce.getDateHeureDepart().isAfter(LocalDateTime.now()))
				.collect(Collectors.toList());
	}


	@GetMapping(path="/historique")
	public List<Annonce> listeHistorique() {

		return this.annonceRepository.findAll()
				.stream()
				.filter(annonce->annonce.getDateHeureDepart().isBefore(LocalDateTime.now()))
				.collect(Collectors.toList());
	}


}
