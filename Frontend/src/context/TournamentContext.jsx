// context/TournamentContext.jsx
'use client';

import React, { createContext, useContext, useState } from 'react';

const TournamentContext = createContext();

export const TournamentProvider = ({ children }) => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      team1: "Köln Spikers",
      team2: "Düsseldorf Smashers",
      pointsTeam1: 0,
      pointsTeam2: 0,
      time: "18:00",
      location: "Sporthalle Köln Süd",
      referee: "Leverkusen Lions",
      group: "A"
    },
    {
      id: 2,
      team1: "Aachen Aces",
      team2: "Bonn Blockers",
      pointsTeam1: 0,
      pointsTeam2: 0,
      time: "19:00",
      location: "Sporthalle Aachen Mitte",
      referee: "Köln Spikers",
      group: "A",
      isFinal: true
    },
    {
      id: 3,
      team1: "Essen Eagles",
      team2: "Münster Maniacs",
      pointsTeam1: 0,
      pointsTeam2: 0,
      time: "17:30",
      location: "Arena Essen West",
      referee: "Düsseldorf Smashers",
    },
    {
      id: 4,
      team1: "Dortmund Diggers",
      team2: "Wuppertal Warriors",
      pointsTeam1: 0,
      pointsTeam2: 0,
      time: "20:00",
      location: "Halle Dortmund Süd",
      referee: "Bonn Blockers",
    },
    {
      id: 5,
      team1: "Leverkusen Lions",
      team2: "Krefeld Killers",
      pointsTeam1: 0,
      pointsTeam2: 0,
      time: "18:45",
      location: "Löwen Arena Leverkusen",
      referee: "Aachen Aces",
    },
  ]);

  return (
    <TournamentContext.Provider value={{ matches, setMatches }}>
      {children}
    </TournamentContext.Provider>
  );
};

export const useTournament = () => {
  const context = useContext(TournamentContext);
  if (!context) {
    throw new Error("useTournament must be used within a TournamentProvider");
  }
  return context;
};
