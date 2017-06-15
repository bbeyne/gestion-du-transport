package dev.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Reservation {
	
	public enum STATUT {
		EN_COURS, 
		ANNULE,
		TERMINE
	}
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Enumerated(EnumType.STRING)
	private STATUT statut;
	@ManyToOne
	private Profile Personne;
	@ManyToOne
	private Annonce Annonce;
	
	public Reservation(STATUT statut, Profile idPersonne, Annonce idAnnonce) {
		super();
		this.statut = statut;
		this.Personne = idPersonne;
		this.Annonce = idAnnonce;
	}
	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Profile getPersonne() {
		return Personne;
	}
	public void setPersonne(Profile personne) {
		Personne = personne;
	}
	public Annonce getAnnonce() {
		return Annonce;
	}
	public void setAnnonce(Annonce annonce) {
		Annonce = annonce;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public STATUT getStatut() {
		return statut;
	}
	public void setStatut(STATUT statut) {
		this.statut = statut;
	}
	public Profile getIdPersonne() {
		return Personne;
	}
	public void setIdPersonne(Profile idPersonne) {
		this.Personne = idPersonne;
	}
	public Annonce getIdAnnonce() {
		return Annonce;
	}
	public void setIdAnnonce(Annonce idAnnonce) {
		this.Annonce = idAnnonce;
	}
	
	
}
