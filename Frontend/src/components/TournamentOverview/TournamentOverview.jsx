// components/TournamentOverview.jsx
'use client';

import React from 'react';
import MatchCard from "@/components/MatchCard/MatchCard";
import TournementNavbar from '@/components/TournementNavbar/TournementNavbar';
import { useTournament } from '@/context/TournamentContext';

export default function TournamentOverview() {
  const { matches } = useTournament();

  return (
    <div>
      <TournementNavbar />
      <div className="upComming-Matches-Container">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
