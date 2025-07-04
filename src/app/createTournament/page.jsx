"use client";
import React, { useState } from 'react';
import './createTournment.css'; 
import Link from 'next/link';

export default function TournamentForm() {
  const [currentSite, setCurrentSite] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    sport: "",
    format: "",
    startDate: "",
    endDate: "",
    startTimePerDay: "",
    endTimePerDay: "",
    courts: "",
    location: "",
    teams: [],
  });
  const [dailyTimes, setDailyTimes] = useState([]);

  const handleDateChange = (type, value) => {
  const newFormData = { ...formData, [type]: value };
  setFormData(newFormData);

  const { startDate, endDate } = {
    ...newFormData,
    [type]: value
  };

  if (startDate && endDate && startDate <= endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = [];

    while (start <= end) {
      const dateStr = start.toISOString().split('T')[0];
      days.push({ date: dateStr, startTime: "", endTime: "" });
      start.setDate(start.getDate() + 1);
    }

    setDailyTimes(days);
  }
};

  const handleGoToDashboard = () => {
    router.push("/dashboard");  
  }

  return (
    <div className="form-container">
      <div className="stepper">
        <div className={`step ${currentSite === 0 ? 'active' : ''}`}>1</div>
        <div className={`line ${currentSite >= 1 ? 'active' : ''}`}></div>
        <div className={`step ${currentSite === 1 ? 'active' : ''}`}>2</div>
        <div className={`line ${currentSite === 2 ? 'active' : ''}`}></div>
        <div className={`step ${currentSite === 2 ? 'active' : ''}`}>3</div>
      </div>
      {currentSite === 0 && (
        <div>
          <h2>Allgemeine Turnierinformationen</h2>
          <input type="text" placeholder="Turniername" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <select value={formData.sport} onChange={e => setFormData({ ...formData, sport: e.target.value })}>
            <option value="">Sportart wählen</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Beachvolleyball">Beachvolleyball</option>
          </select>
          <select value={formData.format} onChange={e => setFormData({ ...formData, format: e.target.value })}>
            <option value="">Format wählen</option>
            <option value="RoundRobin">Round Robin</option>
          </select>
          <button onClick={() => setCurrentSite(1)}>Weiter</button>
        </div>
      )}

      {currentSite === 1 && (
        <div>
          <h2>Details zur Durchführung</h2>
          <label>Datum:</label>
            <input
            type="date"
            value={formData.startDate}
            onChange={(e) => handleDateChange("startDate", e.target.value)}
            />

            <input
            type="date"
            value={formData.endDate}
            onChange={(e) => handleDateChange("endDate", e.target.value)}
            />
            {dailyTimes.length > 0 && (
            <div>
                <h3>Spielzeiten pro Tag:</h3>
                {dailyTimes.map((day, index) => (
                <div key={day.date} style={{ marginBottom: "10px" }}>
                    <strong>{day.date}</strong><br />
                    <input
                    type="time"
                    value={day.startTime}
                    onChange={(e) => {
                        const updated = [...dailyTimes];
                        updated[index].startTime = e.target.value;
                        setDailyTimes(updated);
                    }}
                    />
                    <input
                    type="time"
                    value={day.endTime}
                    onChange={(e) => {
                        const updated = [...dailyTimes];
                        updated[index].endTime = e.target.value;
                        setDailyTimes(updated);
                    }}
                    />
                </div>
                ))}
            </div>
            )}
            <label>Ort</label>
          <input type="text" placeholder="Ort" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} />
          <label>Anzahl Felder</label>
          <input type="number" placeholder="Anzahl Felder oder Feldnamen" value={formData.courts} onChange={e => setFormData({ ...formData, courts: e.target.value })} />

          <div>
            <h3>Teams</h3>
            {formData.teams.map((team, index) => (
              <div key={index}>{team}</div>
            ))}
            <input type="text" placeholder="Teamname eingeben" onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setFormData({ ...formData, teams: [...formData.teams, e.target.value] });
                e.target.value = '';
              }
            }} />
          </div>

          <button onClick={() => setCurrentSite(0)}>Zurück</button>
          <button onClick={() => setCurrentSite(2)}>Fertigstellen</button>
        </div>
      )}

      {currentSite === 2 && (
  <div className="success-container">
    <div className="success-icon">✅</div>
    <h2>Turnier erfolgreich erstellt!</h2>
    <p><strong>{formData.name}</strong> wurde erfolgreich gespeichert.</p>
    <div className="tournament-summary">
      <p><strong>🏐 Sportart:</strong> {formData.sport}</p>
      <p><strong>📋 Format:</strong> {formData.format}</p>
      <p><strong>📍 Ort:</strong> {formData.location}</p>
      <p><strong>📅 Zeitraum:</strong> {formData.startDate} bis {formData.endDate}</p>
      <p><strong>⛳ Felder:</strong> {formData.courts}</p>
      <p><strong>👥 Teams:</strong> {formData.teams.length}</p>

      {dailyTimes.length > 0 && (
        <div>
          <p><strong>🕒 Spielzeiten pro Tag:</strong></p>
          <ul>
            {dailyTimes.map((day) => (
              <li key={day.date}>
                {day.date}: {day.startTime || "--:--"} - {day.endTime || "--:--"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <Link href="/dashboard">
      <button>Zum Dashboard</button>
    </Link>
  </div>
)}

    </div>
  );
}
