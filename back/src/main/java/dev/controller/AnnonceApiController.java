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
import dev.entity.Annonce;
import dev.entity.Voiture;
import dev.repository.AnnonceRepository;

@RestController
@RequestMapping("/collaborateur/annonces")
public class AnnonceApiController {

	@Autowired
	private AnnonceRepository annonceRepository;

	@GetMapping(path="/encours")
	public List<Annonce> listeEnCours(@PathParam(value="matricule") String matricule) {

		return this.annonceRepository.findAll()
				.stream()
				.filter(d->d.getProfil().getMatricule().equals(matricule))
				.filter(d->d.getDateHeureDepart().isAfter(LocalDateTime.now()))
				.collect(Collectors.toList());
	}
	
	@GetMapping(path="/encoursAfterDate")
	public List<Annonce> listeEnCoursAfterDate() {

		return this.annonceRepository.findAll()
				.stream()
				.filter(d->d.getDateHeureDepart().isAfter(LocalDateTime.now()))
				.collect(Collectors.toList());
	}

	@GetMapping(path="/historique")
	public List<Annonce> listeHistorique(@PathParam(value="matricule") String matricule) {
		return this.annonceRepository.findAll()
				.stream()
				.filter(d->d.getProfil().getMatricule().equals(matricule))
				.filter(d->d.getDateHeureDepart().isBefore(LocalDateTime.now()))
				.collect(Collectors.toList());
	}
	
	@PostMapping("/ajouterAnnonce")
    public void addMission(@RequestBody Annonce a) {
		
		
		
		annonceRepository.save(a);
    }


}
