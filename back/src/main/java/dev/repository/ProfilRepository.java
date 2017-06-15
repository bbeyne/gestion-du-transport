package dev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entity.Profile;

public interface ProfilRepository extends JpaRepository<Profile, Integer>{

	List<Profile> findByMatricule(String matricule);
}
