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
	private Profile idPersonne;
	@ManyToOne
	private Annonce idAnnonce;
	
	public Reservation(STATUT statut, Profile idPersonne, Annonce idAnnonce) {
		super();
		this.statut = statut;
		this.idPersonne = idPersonne;
		this.idAnnonce = idAnnonce;
	}
	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
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
		return idPersonne;
	}
	public void setIdPersonne(Profile idPersonne) {
		this.idPersonne = idPersonne;
	}
	public Annonce getIdAnnonce() {
		return idAnnonce;
	}
	public void setIdAnnonce(Annonce idAnnonce) {
		this.idAnnonce = idAnnonce;
	}
	
	
}
