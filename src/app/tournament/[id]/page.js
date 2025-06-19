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
    <div className=""></div>
  );
}
