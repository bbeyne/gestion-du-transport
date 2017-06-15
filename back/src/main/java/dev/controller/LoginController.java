package dev.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.entity.Personne;
import dev.entity.Profile;
import dev.repository.ProfilRepository;
import dev.service.PersonneService;

@RestController
@RequestMapping("/connexion")
public class LoginController {
	@Autowired
	private ProfilRepository profilRep;
	@Autowired
	private PersonneService persRep;
	@GetMapping
	public Profile Authentification(@Param(value = "email") String email, @Param(value = "password") String password){
		List<Personne> list = persRep.listerPersonne();
		Personne personne = list.stream().filter(p -> p.email.equals(email)).collect(Collectors.toList()).get(0);
		if (personne==null) return null;
		else{
			if (!personne.password.equals(DigestUtils.sha1Hex(password))) return null;
			else{
				return profilRep.findByMatricule(personne.matricule).get(0);
			}
		}
	}
	
}
