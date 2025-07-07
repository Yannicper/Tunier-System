'use client';

import React,{useState} from "react";
import TournementNavbar from "@/components/TournementNavbar/TournementNavbar";
import { useTournament } from "@/context/TournamentContext";
import "./matches.css";
import MatchCard from "@/components/MatchCard/MatchCard";
export default function Matches() {
  const { matches, setMatches } = useTournament();
  const [selectedGroup, setSelectedGroup] = useState('A');

  const handleScoreChange = (id, teamKey, value) => {
    const score = parseInt(value) || 0;
    setMatches(prev =>
      prev.map(match =>
        match.id === id ? { ...match, [teamKey]: score } : match
      )
    );
  };

  const finalizeMatch = (id) => {
    setMatches(prev =>
      prev.map(match =>
        match.id === id ? { ...match, isFinal: true } : match
      )
    );
  };3

  return (
    <div>
      <TournementNavbar />
     <div className="container-Matches">
      <div className="matches-Bar">
        <button onClick={() => setSelectedGroup('A')}>Gruppe A</button>
        <button onClick={() => setSelectedGroup('B')}>Gruppe B</button>
      </div>
      <div className="ongoing-Container">
      <h2>Laufende Spiele ({selectedGroup})</h2>
       {matches
    .filter(match => match.group === selectedGroup && !match.isFinal)
    .map(match => (
      <MatchCard key={match.id} match={match} />
    ))}
      </div>
    <div className="upcoming-Container">
      <h2>Bevorstehende Spiele ({selectedGroup})</h2>
        {matches
    .filter(match => match.group === selectedGroup && match.isFinal)
    .map(match => (
      <div key={match.id} className="match-card">
        <p>{match.team1} {match.pointsTeam1} : {match.pointsTeam2} {match.team2}</p>
        <p>Finalisiert ✔️</p>
      </div>
    ))}
    </div>
</div>
</div>
  );
}
