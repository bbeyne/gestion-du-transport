package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import dev.entity.Adresse;
import dev.entity.Annonce;

public interface AnnonceRepository extends JpaRepository<Annonce, Integer> {

}
