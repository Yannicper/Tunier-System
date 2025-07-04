import React from 'react';
import './ScoreForm.css';

function ScoreForm({ match, scores, onChange, onSave }) {
  return (
    <div className="result-form">
      <h4>Ergebnisse eintragen (3 Sätze)</h4>
      {scores.map((set, index) => (
        <div key={index} className="set-row">
          <span>Satz {index + 1}:</span>
          <input
            type="number"
            placeholder={`${match.team1}`}
            value={set.team1}
            onChange={(e) => onChange(index, 'team1', e.target.value)}
          />
          <span>:</span>
          <input
            type="number"
            placeholder={`${match.team2}`}
            value={set.team2}
            onChange={(e) => onChange(index, 'team2', e.target.value)}
          />
        </div>
      ))}
      <button className="saveResults" onClick={onSave}>Speichern</button>
    </div>
  );
}

export default ScoreForm;