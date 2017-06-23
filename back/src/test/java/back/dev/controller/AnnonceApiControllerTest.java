package back.dev.controller;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.*;
import java.time.LocalDateTime;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import dev.entity.Adresse;
import dev.entity.Annonce;
import dev.repository.AdresseRepository;
import dev.repository.AnnonceRepository;
import dev.repository.ProfilRepository;

@ContextConfiguration(classes = { TestConfig.class })
@RunWith(SpringRunner.class)
@SpringBootTest
public class AnnonceApiControllerTest {
	
	@Autowired AnnonceRepository an;
	@Autowired
	private ProfilRepository profilrep;
	@Autowired
	private AdresseRepository adresseRepository;
	
	@Test
	public void testListeEnCours() {
		
//		LocalDate debut = LocalDate.of(2016,6,20);
//		LocalDate fin = LocalDate.of(2016,6,21);
//		assertThat(cs.getJoursAbsenceEffectifs(debut, fin), equalTo(2));
//		assertThat(an.findAll(), );
		
		
		
		//assertInstanceOf(an.findAll(), List.class);
		
		LocalDateTime dateHeureDepartTest = LocalDateTime.of(2018, 5, 7, 15, 30, 00);
		Adresse adresseTest = new Adresse("18", "rue", "de la paix et du test", "Nantes", "59000", "France");
		
		adresseRepository.save(adresseTest);
		
		//Annonce annonceTest = new Annonce(dateHeureDepartTest, 2, "XX-123-VF","renault", "scenic",Annonce.STATUT.ANNULE, profilrep.getOne(1), adresseTest,adresseTest);
		
		
		assertThat(adresseRepository.findAll().get(0).getLibelle(), equalTo("rue"));
		
	}

}
