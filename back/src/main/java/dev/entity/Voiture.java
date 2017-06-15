package dev.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Voiture {
	public enum STATUT {
		EN_SERVICE, 
		EN_REPARATION,
		HS
	}

	public enum CATEGORIE {
		MINI_URBAINE,
		MICRO_CITADINE,
		CITADINE_POLYVENTES,
		COMPACTES,
		BERLINE_TAILLE_S,
		BERLINE_TAILLE_M,
		BERLINE_TAILLE_L,
		SUV,
		TOUT_TERRAINS,
		PICK_UP
	}

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String immatriculation;
	private String marque;
	private String modele;
	@Enumerated(EnumType.STRING)
	private CATEGORIE categorie;
	private int nbPlaces;
	@Enumerated(EnumType.STRING)
	private STATUT statut;
	private String urlImage;
	@ManyToOne
	private Coordonees idCoordonnees;

	
	//CONSTRUCTOR
	public Voiture() {
		super();
	}

	public Voiture(String immatriculation, String marque, String modele, CATEGORIE categorie, int nbPlaces,
			STATUT statut, String urlImage, Coordonees idCoordonnees) {
		super();
		this.immatriculation = immatriculation;
		this.marque = marque;
		this.modele = modele;
		this.categorie = categorie;
		this.nbPlaces = nbPlaces;
		this.statut = statut;
		this.urlImage = urlImage;
		this.idCoordonnees = idCoordonnees;
	}





	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	//GETTERS & SETTERS
	public String getImmatriculation() {
		return immatriculation;
	}
	public void setImmatriculation(String immatriculation) {
		this.immatriculation = immatriculation;
	}
	public String getMarque() {
		return marque;
	}
	public void setMarque(String marque) {
		this.marque = marque;
	}
	public String getModele() {
		return modele;
	}
	public void setModele(String modele) {
		this.modele = modele;
	}
	public CATEGORIE getCategorie() {
		return categorie;
	}
	public void setCategorie(CATEGORIE categorie) {
		this.categorie = categorie;
	}
	public int getNbPlaces() {
		return nbPlaces;
	}
	public void setNbPlaces(int nbPlaces) {
		this.nbPlaces = nbPlaces;
	}
	public STATUT getStatut() {
		return statut;
	}
	public void setStatut(STATUT statut) {
		this.statut = statut;
	}
	public String getUrlImage() {
		return urlImage;
	}
	public void setUrlImage(String urlImage) {
		this.urlImage = urlImage;
	}

	public Coordonees getIdCoordonnees() {
		return idCoordonnees;
	}

	public void setIdCoordonnees(Coordonees idCoordonnees) {
		this.idCoordonnees = idCoordonnees;
	}



}
