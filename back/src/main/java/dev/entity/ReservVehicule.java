package dev.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class ReservVehicule {



	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
	private LocalDateTime dateHeureDebut;
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
	private LocalDateTime dateHeureFin;
	@ManyToOne
	private Voiture voiture;
	@ManyToOne
	private Profile profil;

	public ReservVehicule() {
		super();
	}


	public ReservVehicule(LocalDateTime dateHeureDebut, LocalDateTime dateHeureFin, Voiture voiture, Profile profil) {
		super();
		this.dateHeureDebut = dateHeureDebut;
		this.dateHeureFin = dateHeureFin;
		this.voiture = voiture;
		this.profil = profil;
	}


	public LocalDateTime getDateHeureDebut() {
		return dateHeureDebut;
	}


	public void setDateHeureDebut(LocalDateTime dateHeureDebut) {
		this.dateHeureDebut = dateHeureDebut;
	}


	public LocalDateTime getDateHeureFin() {
		return dateHeureFin;
	}


	public void setDateHeureFin(LocalDateTime dateHeureFin) {
		this.dateHeureFin = dateHeureFin;
	}


	public Voiture getVoiture() {
		return voiture;
	}


	public void setVoiture(Voiture voiture) {
		this.voiture = voiture;
	}


	public Profile getProfil() {
		return profil;
	}


	public void setProfil(Profile profil) {
		this.profil = profil;
	}


}
