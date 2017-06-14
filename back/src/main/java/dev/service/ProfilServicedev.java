package dev.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.entity.Personne;
import dev.entity.Profile;
import dev.entity.Profile.TYPE;
import dev.repository.ProfilRepository;

@Service
public class ProfilServicedev implements ProfilsService{
	@Autowired 
	private ProfilRepository profilrep;
	@Autowired
	private PersonneService personneserv;
	
	public void Init(){
		List<Personne> list = personneserv.listerPersonne();

		for (Personne personne : list) {
			if (personne==list.get(0)) {
				Profile profil = new Profile(personne.matricule, TYPE.valueOf("ADMIN"), "00.00.00.00.01");
				profilrep.save(profil);
			}
			else if (personne==list.get(1)) {
				Profile profil = new Profile(personne.matricule, TYPE.valueOf("CHAUFFEUR"), "00.00.00.00.02");
				profilrep.save(profil);
			}
			else {
				Profile profil = new Profile(personne.matricule, TYPE.valueOf("COLLABORATEUR"), "00.00.00.00.03");
				profilrep.save(profil);
			}
    	}
	}
}
