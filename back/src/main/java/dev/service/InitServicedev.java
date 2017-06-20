package dev.service;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import dev.entity.Adresse;
import dev.entity.Annonce;
import dev.entity.Coordonees;
import dev.entity.Personne;
import dev.entity.Profile;
import dev.entity.Profile.TYPE;
import dev.entity.ReservVehicule;
import dev.entity.Reservation;
import dev.entity.Voiture;
import dev.repository.AdresseRepository;
import dev.repository.AnnonceRepository;
import dev.repository.CoordonneesRepository;
import dev.repository.ProfilRepository;
import dev.repository.ReservVehiculeRepository;
import dev.repository.ReservationRepository;
import dev.repository.VoitureRepository;

@Service
public class InitServicedev implements InitService {

	@Autowired
	private ProfilRepository profilrep;
	@Autowired
	private PersonneService personneserv;
	@Autowired
	private AdresseRepository adresseRepository;
	@Autowired
	private AnnonceRepository annonceRepository;
	@Autowired
	private ReservationRepository reservationRepository;
	@Autowired
	private CoordonneesRepository coordonneesRep;
	@Autowired
	private VoitureRepository voitureRep;
	@Autowired
	private ReservVehiculeRepository reservVoitRep;

	public void Init() {
		List<Personne> list = personneserv.listerPersonne();

		for (Personne personne : list) {
			if (personne == list.get(0)) {
				Profile profile1 = new Profile(personne.matricule, TYPE.valueOf("ADMIN"), "00.00.00.00.01");
				profilrep.save(profile1);
			} else if (personne == list.get(1)) {
				Profile profile2 = new Profile(personne.matricule, TYPE.valueOf("CHAUFFEUR"), "00.00.00.00.02");
				profilrep.save(profile2);
			} else {
				Profile profile3 = new Profile(personne.matricule, TYPE.valueOf("COLLABORATEUR"), "00.00.00.00.03");
				profilrep.save(profile3);
			}
		}

		LocalDateTime dateHeureDepart1 = LocalDateTime.of(2017, 5, 4, 12, 30);
		LocalDateTime dateHeureDepart2 = LocalDateTime.of(2017, 1, 7, 11, 00);
		LocalDateTime dateHeureDepart3 = LocalDateTime.of(2018, 1, 7, 11, 00);
		LocalDateTime dateHeureDepart4 = LocalDateTime.of(2017, 12, 7, 9, 00);

		// LocalDate.parse("1993-06-25")

		Adresse adresse1 = new Adresse("7", "rue", "de la paix", "Nantes", "59000", "France");
		Adresse adresse2 = new Adresse("10", "avenue", "de la gourmandise", "Paris", "75000", "France");
		adresseRepository.save(adresse1);
		adresseRepository.save(adresse2);

		Annonce annonce1 = new Annonce(dateHeureDepart1, 2, "XX-123-VF","renault", "scenic",Annonce.STATUT.ANNULE, profilrep.getOne(1), adresse1,
				adresse2);
		Annonce annonce2 = new Annonce(dateHeureDepart2, 3, "XX-123-VF","renault", "scenic", Annonce.STATUT.TERMINE, profilrep.getOne(2), adresse2,
				adresse1);
		Annonce annonce3 = new Annonce(dateHeureDepart2, 1,"XX-123-VF","renault", "scenic", Annonce.STATUT.TERMINE, profilrep.getOne(3), adresse1,
				adresse2);
		Annonce annonce4 = new Annonce(dateHeureDepart1, 5, "XX-123-VF","renault", "scenic", Annonce.STATUT.ANNULE, profilrep.getOne(1), adresse1,
				adresse2);
		Annonce annonce5 = new Annonce(dateHeureDepart4, 5,  "XX-123-VF","renault", "scenic",Annonce.STATUT.TERMINE, profilrep.getOne(5), adresse2,
				adresse1);
		
		
		annonceRepository.save(annonce1);
		annonceRepository.save(annonce2);
		annonceRepository.save(annonce3);
		annonceRepository.save(annonce4);
		annonceRepository.save(annonce5);
		annonceRepository.save(new Annonce(dateHeureDepart1, 3,  "XX-123-VF","renault", "scenic",Annonce.STATUT.ANNULE, profilrep.getOne(1), adresse1,
				adresse2));
		annonceRepository.save(new Annonce(dateHeureDepart3, 3, "XX-123-VF","renault", "scenic", Annonce.STATUT.ANNULE, profilrep.getOne(1), adresse1,
				adresse2));

		Reservation reservation1 = new Reservation(Reservation.STATUT.ANNULE, profilrep.getOne(1), annonce3);
		Reservation reservation2 = new Reservation(Reservation.STATUT.EN_COURS, profilrep.getOne(2), annonce2);
		Reservation reservation3 = new Reservation(Reservation.STATUT.TERMINE, profilrep.getOne(3), annonce4);
		Reservation reservation4 = new Reservation(Reservation.STATUT.TERMINE, profilrep.getOne(3), annonce5);
		reservationRepository.save(reservation1);
		reservationRepository.save(reservation2);
		reservationRepository.save(reservation3);
		reservationRepository.save(reservation4);
		reservationRepository.save(new Reservation(Reservation.STATUT.EN_COURS, profilrep.getOne(3), annonce1));
		reservationRepository.save(new Reservation(Reservation.STATUT.EN_COURS, profilrep.getOne(3), annonce1));

		LocalDateTime dateCoordonnees1 = LocalDateTime.of(2017, 5, 4, 12, 00, 55);
		LocalDateTime dateCoordonnees2 = LocalDateTime.of(2017, 1, 6, 12, 12, 41);
		LocalDateTime dateCoordonnees3 = LocalDateTime.of(2017, 5, 4, 9, 54, 35);
		LocalDateTime dateCoordonnees4 = LocalDateTime.of(2017, 2, 25, 21, 30, 58);
		LocalDateTime dateCoordonnees5 = LocalDateTime.of(2017, 5, 1, 4, 45, 5);

		Coordonees coordonnees1 = new Coordonees(dateCoordonnees1, "10.53543,-50.45684");
		Coordonees coordonnees2 = new Coordonees(dateCoordonnees2, "104.53543,-502.45684");
		Coordonees coordonnees3 = new Coordonees(dateCoordonnees3, "120.53543,-540.45684");
		Coordonees coordonnees4 = new Coordonees(dateCoordonnees4, "140.53543,-540.45684");
		Coordonees coordonnees5 = new Coordonees(dateCoordonnees5, "100.53543,-50.45684");
		coordonneesRep.save(coordonnees1);
		coordonneesRep.save(coordonnees2);
		coordonneesRep.save(coordonnees3);
		coordonneesRep.save(coordonnees5);
		coordonneesRep.save(coordonnees4);

		Voiture voiture1 = new Voiture("PP-154-MM", "Renault", "Xantia", Voiture.CATEGORIE.BERLINE_TAILLE_M, 5,
				Voiture.STATUT.EN_SERVICE, "url image", coordonnees1);
		Voiture voiture2 = new Voiture("LE-123-EL", "Citroen", "ZX", Voiture.CATEGORIE.CITADINE_POLYVENTES, 6,
				Voiture.STATUT.HS, "url image", coordonnees2);
		Voiture voiture3 = new Voiture("AV-781-NN", "Ford", "Fiesta", Voiture.CATEGORIE.BERLINE_TAILLE_S, 5,
				Voiture.STATUT.EN_SERVICE, "url image", coordonnees3);
		Voiture voiture4 = new Voiture("KF-542-LG", "Citroen", "CX", Voiture.CATEGORIE.MICRO_CITADINE, 6,
				Voiture.STATUT.HS, "url image", coordonnees4);
		voitureRep.save(voiture1);
		voitureRep.save(voiture2);
		voitureRep.save(voiture3);
		voitureRep.save(voiture4);

		ReservVehicule reserv1 = new ReservVehicule(dateHeureDepart1, dateHeureDepart2, voiture3, profilrep.getOne(1));
		ReservVehicule reserv2 = new ReservVehicule(dateHeureDepart2, dateCoordonnees3, voiture4, profilrep.getOne(2));
		reservVoitRep.save(reserv1);
		reservVoitRep.save(reserv2);
		
		
		
		
	}
}
