package dev.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Coordonees {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private LocalDateTime dateCoordonnees;
	private String coordonnees; // ex: "10.22,11.00"
	
	
	
	public Coordonees(LocalDateTime dateCoordonnees, String coordonnees) {
		super();
		this.dateCoordonnees = dateCoordonnees;
		this.coordonnees = coordonnees;
	}
	public Coordonees() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public LocalDateTime getDateCoordonnees() {
		return dateCoordonnees;
	}
	public void setDateCoordonnees(LocalDateTime dateCoordonnees) {
		this.dateCoordonnees = dateCoordonnees;
	}
	public String getCoordonnees() {
		return coordonnees;
	}
	public void setCoordonnees(String coordonnees) {
		this.coordonnees = coordonnees;
	}
	
	
}
