'use client';

import React from "react";
import Link from 'next/link';
import './TournementNavbar.css';
import { CalendarDays, Trophy, Users, Settings, DoorOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';

function TournementNavbar() {
  const pathname = usePathname(); // z. B. /tournament/1/Overview
  const segments = pathname.split('/'); // ["", "tournament", "1", "Overview"]

  const tournamentId = segments[2]; // "1" ist an Index 2

  return (
    <nav>
      <div className="logo-Name-Container">
        Spicher Open 
      </div>
      <ul className="nav-links">
        <li>
          <Link href={`/tournament/${tournamentId}/Overview/matches`}>
            <div className="nav-item">
              <CalendarDays size={18} />
              <span>Matches</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`/tournament/${tournamentId}/Overview/standings`}>
            <div className="nav-item">
              <Trophy size={18} />
              <span>Standing</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`/tournament/${tournamentId}/Overview/teams`}>
            <div className="nav-item">
              <Users size={18} />
              <span>Teams</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`/tournament/${tournamentId}/Overview/settings`}>
            <div className="nav-item">
              <Settings size={18} />
              <span>Settings</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <div className="nav-item">
              <DoorOpen size={18} />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TournementNavbar;
