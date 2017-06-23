package dev.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import dev.entity.Personne;

@Service
public class PersonneServiceDev implements PersonneService{
	/**
	 * Retourne l'ensemble des personnes depuis le fichier json
	 */
	public List<Personne> listerPersonne(){
		ObjectMapper objectMapper = new ObjectMapper();
	    URL url;
	    try {
	        url = new URL("https://raw.githubusercontent.com/DiginamicFormation/ressources-atelier/master/users.json");
	        List<Personne> list = objectMapper.readValue(url, 
	                new TypeReference<ArrayList<Personne>>() {});
	        return list;
	    } catch (MalformedURLException e) {
	        // TODO Auto-generated catch block
	        e.printStackTrace();
	    } catch (JsonParseException e) {
	        // TODO Auto-generated catch block
	        e.printStackTrace();
	    } catch (JsonMappingException e) {
	        // TODO Auto-generated catch block
	        e.printStackTrace();
	    } catch (IOException e) {
	        // TODO Auto-generated catch block
	        e.printStackTrace();
	    }
		return null;
	}
	/**
	 * Recherche d'une personne par son matricule
	 */
	public Personne PersonneByMatricule(String matricule){
		List<Personne> list= listerPersonne();
		return list.stream().filter(p->p.getMatricule().equals(matricule)).collect(Collectors.toList()).get(0);
	}
}
