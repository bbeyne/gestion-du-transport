package dev.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Profile {
	
	public enum TYPE {
		COLLABORATEUR, 
		CHAUFFEUR,
		ADMIN
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String matricule;
	@Enumerated(EnumType.STRING)
	private TYPE type;
	private int telephone;
	
	
	public Profile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Profile(String matricule, TYPE type, int telephone) {
		super();
		this.matricule = matricule;
		this.type = type;
		this.telephone = telephone;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getMatricule() {
		return matricule;
	}
	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}
	public TYPE getType() {
		return type;
	}
	public void setType(TYPE type) {
		this.type = type;
	}
	public int getTelephone() {
		return telephone;
	}
	public void setTelephone(int telephone) {
		this.telephone = telephone;
	}
}
