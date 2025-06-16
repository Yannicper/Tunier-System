"use client"; // damit React state funktioniert
import React from "react";

export default function TournamentAdminPage({ params }) {
  const actualParams = React.use(params); // hier wird das Promise aufgelöst
  const { id } = actualParams;
  const [selectedTab, setSelectedTab] = React.useState("overview");

  const tournament = {
    id,
    name: "Beispielturnier",
    startTime: "2025-06-15T10:00:00Z",
    status: "live",
    teams: 16,
    progress: 55,
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <nav style={{
        width: "250px",
        borderRight: "1px solid #ccc",
        padding: "1rem"
      }}>
        <h2>{tournament.name}</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <button onClick={() => setSelectedTab("overview")} style={{ background: selectedTab === "overview" ? "#ddd" : "transparent" }}>
              Übersicht
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedTab("teams")} style={{ background: selectedTab === "teams" ? "#ddd" : "transparent" }}>
              Teams verwalten
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedTab("settings")} style={{ background: selectedTab === "settings" ? "#ddd" : "transparent" }}>
              Einstellungen
            </button>
          </li>
        </ul>
      </nav>

      {/* Hauptbereich */}
      <main style={{ flexGrow: 1, padding: "1rem" }}>
        {selectedTab === "overview" && (
          <>
            <h1>Turnierübersicht</h1>
            <p><strong>Startzeit:</strong> {new Date(tournament.startTime).toLocaleString("de-DE")}</p>
            <p><strong>Status:</strong> {tournament.status}</p>
            <p><strong>Teams:</strong> {tournament.teams}</p>
            <p><strong>Fortschritt:</strong> {tournament.progress}%</p>
          </>
        )}
        {selectedTab === "teams" && (
          <>
            <h1>Teams verwalten</h1>
            <p>Hier kannst du Teams hinzufügen, bearbeiten oder entfernen.</p>
            
          </>
        )}
        {selectedTab === "settings" && (
          <>
            <h1>Einstellungen</h1>
            <p>Turnier-Einstellungen bearbeiten.</p>
           
          </>
        )}
      </main>
    </div>
  );
}
