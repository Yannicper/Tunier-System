package com.backend.tunierSystem.controller;

import com.backend.tunierSystem.model.Tournament;
import com.backend.tunierSystem.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tournaments") // Basisroute
public class TournamentController {

    @Autowired
    private TournamentRepository tournamentRepository;

    // POST: Turnier erstellen
    @PostMapping("/create")
    public ResponseEntity<Tournament> createTournament(@RequestBody Tournament tournament) {
        Tournament savedTournament = tournamentRepository.save(tournament);
        return ResponseEntity.ok(savedTournament);
    }
}
