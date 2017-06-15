package dev.entity;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Annonce {
	public enum STATUT {
		ANNULE, 
		TERMINE,
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private LocalDateTime dateHeureDepart;
	private int nbPlacesDispo;
	
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
}
