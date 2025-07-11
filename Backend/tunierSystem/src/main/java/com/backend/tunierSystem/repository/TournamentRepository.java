package com.backend.tunierSystem.repository;

import com.backend.tunierSystem.model.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Long> {
    // Hier kannst du eigene Query-Methoden hinzufügen, z.B. nach Status filtern
}