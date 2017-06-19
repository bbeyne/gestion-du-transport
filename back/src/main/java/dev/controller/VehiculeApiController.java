package dev.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import dev.entity.Voiture;
import dev.entity.Voiture.CATEGORIE;
import dev.repository.VoitureRepository;

@RestController
@RequestMapping("/admin/vehicule")
public class VehiculeApiController {
	@Autowired private VoitureRepository vehiculeRepo;

	@GetMapping(path="/listerVehicule")
	public List<Voiture> listeVehicule() {
		return this.vehiculeRepo.findAll();
	}
	@GetMapping(path="/categories")
	public List<Voiture.CATEGORIE> listeCategorie() {
		return Arrays.asList(Voiture.CATEGORIE.values());
	}


//	@PostMapping(value = "/ajouterVoiture",consumes="application/json")
//	public @ResponseBody String registerUser(@RequestBody Voiture newVoiture,HttpServletRequest request) {
//	    String resp=null;
//	    try{
//	        System.out.println("$$$$$$$$$$ "+newVoiture.getImmatriculation());
//
//	    resp="success";
//	    }catch(Exception e){
//	        resp="fail";
//	        System.out.println(e);
//	    }
//	    return resp;
//
//	}
//
/*	@PostMapping(path="/ajouterVoiture")
	public void addVoiture(@RequestBody List<String> test,HttpServletRequest request) {
		System.out.println(test);
	}*/

}
