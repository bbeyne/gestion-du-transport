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
import dev.entity.Adresse;
import dev.entity.Annonce;
import dev.repository.AdresseRepository;

import dev.repository.AnnonceRepository;

@RestController
@RequestMapping("/collaborateur/annonces")
public class AnnonceApiController {

	@Autowired
	private AnnonceRepository annonceRepository;
	@Autowired
	private AdresseRepository adresseRepository;

	@GetMapping(path="/encours")
	public List<Annonce> listeEnCours(@PathParam(value="matricule") String matricule) {

		return this.annonceRepository.findAll()
				.stream()
				.filter(d->d.getProfil().getMatricule().equals(matricule))
				.filter(d->d.getDateHeureDepart().isAfter(LocalDateTime.now()))
				.collect(Collectors.toList());
	}
	
	/**
	 * methode qui recupere les annonces qui sont aprés la date et heure du jour
	 * @return la liste des annonces 
	 */
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

		
		Adresse adresseDepart = new Adresse( a.getAdresseDepart().getNumRue(), a.getAdresseDepart().getLibelle(), a.getAdresseDepart().getNomRue(), a.getAdresseDepart().getVille(), a.getAdresseDepart().getCodePostale(), a.getAdresseDepart().getPays());
		
		Adresse adresseArrivee = new Adresse( a.getAdresseArrivee().getNumRue(), a.getAdresseArrivee().getLibelle(), a.getAdresseArrivee().getNomRue(), a.getAdresseArrivee().getVille(), a.getAdresseArrivee().getCodePostale(), a.getAdresseArrivee().getPays());

		adresseRepository.save(adresseDepart);
		adresseRepository.save(adresseArrivee);
		
		a.setAdresseDepart(adresseDepart);
		a.setAdresseArrivee(adresseArrivee);
		
		annonceRepository.save(a);
    }


}
