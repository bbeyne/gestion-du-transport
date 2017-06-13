package dev.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Adresse {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String numRue;
	private String libelle;
	private String nomRue;
	private String ville;
	private String codePostale;
	private String pays;
	
	
	//CONSTRUCTOR
	public Adresse() {
		super();
	}
	
	public Adresse(String numRue, String libelle, String nomRue, String ville, String codePostale, String pays) {
		super();
		this.numRue = numRue;
		this.libelle = libelle;
		this.nomRue = nomRue;
		this.ville = ville;
		this.codePostale = codePostale;
		this.pays = pays;
	}

	//GETTERS & SETTERS
	public String getNumRue() {
		return numRue;
	}
	public void setNumRue(String numRue) {
		this.numRue = numRue;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public String getNomRue() {
		return nomRue;
	}
	public void setNomRue(String nomRue) {
		this.nomRue = nomRue;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public String getCodePostale() {
		return codePostale;
	}
	public void setCodePostale(String codePostale) {
		this.codePostale = codePostale;
	}
	public String getPays() {
		return pays;
	}
	public void setPays(String pays) {
		this.pays = pays;
	}
}




