package dev.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dev.entity.Personne;
import dev.entity.Profile;
import dev.entity.Profile.TYPE;
import dev.repository.ProfilRepository;
import dev.service.PersonneService;

/**
 * 	
	 * classe qui permet de verifier si la personne avec l'email et le mdp existe dans la base de donnees existe
	 
 * @author BEN
 *
 */
@RestController
@RequestMapping("/connexion")
public class LoginController {
	@Autowired
	private ProfilRepository profilRep;
	@Autowired
	private PersonneService persRep;

	@GetMapping
	public Profile Authentification(@RequestParam(value = "email") String email, @RequestParam(value = "password") String password){
		List<Personne> list = persRep.listerPersonne().stream().filter(p -> p.getEmail().equals(email)).collect(Collectors.toList());
		if (!list.isEmpty()){
			Personne personne = list.get(0);
			if (personne.getPassword().equals(DigestUtils.sha1Hex(password))){
				return profilRep.findByMatricule(personne.getMatricule()).get(0);
			}
		}
		return new Profile("", TYPE.INCONNU, "");
	}

}
