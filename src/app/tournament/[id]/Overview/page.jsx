'use client';

import React from 'react';
import MatchCard from "@/components/MatchCard/MatchCard"



export default function TournamentOverview() {
  const upcomingMatches = [
  {
    id: 1,
    team1: "Köln Spikers",
    team2: "Düsseldorf Smashers",
    pointsTeam1: 0,
    pointsTeam2: 0,
    time: "18:00",
    location: "Sporthalle Köln Süd",
    referee: "Leverkusen Lions",
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
];
  return (
    <div>
      <div className='tournemnt-Navbar'>Information</div>
      <div className="overviewInformations">
            <h1>Spicher Open</h1>
      </div>
      <div className="upComming-Matches-Container">
          {upcomingMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
            ))}
      </div>
    </div>
  );
}
