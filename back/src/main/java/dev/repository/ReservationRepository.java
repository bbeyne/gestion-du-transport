package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entity.Reservation;

public interface ReservationRepository  extends JpaRepository<Reservation, Integer> {

}
