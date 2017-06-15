package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entity.Voiture;

public interface VehiculeRepository extends JpaRepository<Voiture, Integer>{

}
