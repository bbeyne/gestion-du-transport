package dev.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import dev.entity.Annonce;

public interface AnnonceRepository extends JpaRepository<Annonce, Integer> {

//	@Query("SELECT a FROM Annonce a WHERE a.rofile = :matricule")
//	public List<Annonce> findByMatricule(@Param("matricule") String matricule);

}
