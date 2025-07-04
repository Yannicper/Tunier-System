import React, { useState } from 'react';
import './MatchCard.css';
import ScoreForm from "@/components/ScoreForm/ScoreForm";

function MatchCard({ match }) {
  const [showForm, setShowForm] = useState(false);
  const [scores, setScores] = useState([
    { team1: '', team2: '' },
    { team1: '', team2: '' },
    { team1: '', team2: '' },
  ]);

  const handleScoreChange = (index, team, value) => {
    const updatedScores = [...scores];
    updatedScores[index][team] = value;
    setScores(updatedScores);
  };

  const handleSave = () => {
    console.log('Ergebnisse gespeichert:', scores);
    setShowForm(false);
  };

  return (
    <div className="MatchCard-container">
      <div className="mainGameInformations">
        <div className="teams">
          <p className="team1">{match.team1}</p>
          <span className="vs">vs</span>
          <p className="team2">{match.team2}</p>
        </div>
        <div className="extraInformations">
          <div className="location">Ort: {match.location}</div>
          <div className="referee">Schiedsrichter: {match.referee}</div>
          <div className="matchTime">Uhrzeit: {match.time}</div>
        </div>
      </div>

      <div className="action-Area">
        <button className="updateGame" onClick={() => setShowForm(!showForm)}>
          Update Ergebnisse
        </button>
      </div>

      {showForm && (
        <ScoreForm
          match={match}
          scores={scores}
          onChange={handleScoreChange}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default MatchCard;

