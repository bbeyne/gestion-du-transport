package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entity.Coordonees;

public interface CoordonneesRepository extends JpaRepository<Coordonees, Integer>{

}
