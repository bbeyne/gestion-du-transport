package dev.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Annonce {
	public enum STATUT {
		ANNULE, 
		TERMINE,
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dateHeureDepart;
	private int nbPlacesDispo;
	private String immatriculation;
	private String marque;
	private String modele;
	
	@Enumerated(EnumType.STRING)
	private STATUT statut;
	@ManyToOne
	private Profile Profil;
	@ManyToOne
	private Adresse AdresseDepart;
	@ManyToOne
	private Adresse AdresseArrivee;

	//CONSTRUCTORS
	public Annonce() {
		super();
	}
	
	public Annonce(LocalDateTime dateHeureDepart, int nbPlacesDispo, STATUT statut, Profile idProfil, Adresse idAdresseDepart,
			Adresse idAdresseArrivee) {
		super();
		this.setDateHeureDepart(dateHeureDepart) ;
		this.nbPlacesDispo = nbPlacesDispo;
		this.statut = statut;
		this.Profil = idProfil;
		this.AdresseDepart = idAdresseDepart;
		this.AdresseArrivee = idAdresseArrivee;
	}
	
	public Annonce(LocalDateTime dateHeureDepart, int nbPlacesDispo, String immatriculation, String marque,
			String modele, STATUT statut, Profile profil, Adresse adresseDepart, Adresse adresseArrivee) {
		super();
		this.dateHeureDepart = dateHeureDepart;
		this.nbPlacesDispo = nbPlacesDispo;
		this.immatriculation = immatriculation;
		this.marque = marque;
		this.modele = modele;
		this.statut = statut;
		Profil = profil;
		AdresseDepart = adresseDepart;
		AdresseArrivee = adresseArrivee;
	}

	//GETTERS & SETTERS
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	public int getNbPlacesDispo() {
		return nbPlacesDispo;
	}
	public void setNbPlacesDispo(int nbPlacesDispo) {
		this.nbPlacesDispo = nbPlacesDispo;
	}
	public STATUT getStatut() {
		return statut;
	}
	public void setStatut(STATUT statut) {
		this.statut = statut;
	}
	public Profile getIdProfil() {
		return Profil;
	}
	public Profile getProfil() {
		return Profil;
	}

	public void setProfil(Profile profil) {
		Profil = profil;
	}

	public Adresse getAdresseDepart() {
		return AdresseDepart;
	}

	public void setAdresseDepart(Adresse adresseDepart) {
		AdresseDepart = adresseDepart;
	}

	public Adresse getAdresseArrivee() {
		return AdresseArrivee;
	}

	public void setAdresseArrivee(Adresse adresseArrivee) {
		AdresseArrivee = adresseArrivee;
	}

	public void setIdProfil(Profile idProfil) {
		this.Profil = idProfil;
	}
	public Adresse getIdAdresseDepart() {
		return AdresseDepart;
	}
	public void setIdAdresseDepart(Adresse idAdresseDepart) {
		this.AdresseDepart = idAdresseDepart;
	}
	public Adresse getIdAdresseArrivee() {
		return AdresseArrivee;
	}
	public void setIdAdresseArrivee(Adresse idAdresseArrivee) {
		this.AdresseArrivee = idAdresseArrivee;
	}

	public LocalDateTime getDateHeureDepart() {
		return dateHeureDepart;
	}

	public void setDateHeureDepart(LocalDateTime dateHeureDepart) {
		this.dateHeureDepart = dateHeureDepart;
	}

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
	
	
}
