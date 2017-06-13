package dev.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Annonce {
	public enum STATUT {
		ANNULE, 
		TERMINE,
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private LocalDateTime depart;
	private int nbPlacesDispo;
	private STATUT statut;
	private int idProfil;
	private int idAdresseDepart;
	private int idAdresseArrivee;

	//CONSTRUCTORS
	public Annonce() {
		super();
	}
	
	public Annonce(LocalDateTime depart, int nbPlacesDispo, STATUT statut, int idProfil, int idAdresseDepart,
			int idAdresseArrivee) {
		super();
		this.depart = depart;
		this.nbPlacesDispo = nbPlacesDispo;
		this.statut = statut;
		this.idProfil = idProfil;
		this.idAdresseDepart = idAdresseDepart;
		this.idAdresseArrivee = idAdresseArrivee;
	}
	
	
	
	
	
	
	//GETTERS & SETTERS
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public LocalDateTime getDepart() {
		return depart;
	}
	public void setDepart(LocalDateTime depart) {
		this.depart = depart;
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
	public int getIdProfil() {
		return idProfil;
	}
	public void setIdProfil(int idProfil) {
		this.idProfil = idProfil;
	}
	public int getIdAdresseDepart() {
		return idAdresseDepart;
	}
	public void setIdAdresseDepart(int idAdresseDepart) {
		this.idAdresseDepart = idAdresseDepart;
	}
	public int getIdAdresseArrivee() {
		return idAdresseArrivee;
	}
	public void setIdAdresseArrivee(int idAdresseArrivee) {
		this.idAdresseArrivee = idAdresseArrivee;
	}
	
	
	
	
	
	
}
