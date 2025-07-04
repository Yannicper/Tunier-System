import React from "react";
import Link from 'next/link';
import './TournementNavbar.css'
import { CalendarDays, Trophy, Users, Settings,DoorOpen } from 'lucide-react';
function TournementNavbar({ currentTab, setCurrentTab }) {
    return(
        <nav>
            <div className="logo-Name-Container">
                Spicher Open 
            </div>
           <ul className="nav-links">
      <li>
        <Link href="/matches">
          <div className="nav-item">
            <CalendarDays size={18} />
            <span>Matches</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/standings">
          <div className="nav-item">
            <Trophy size={18} />
            <span>Standing</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/teams">
          <div className="nav-item">
            <Users size={18} />
            <span>Teams</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/settings">
          <div className="nav-item">
            <Settings size={18} />
            <span>Settings</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/dashboard">
        <div className="nav-item">
           <DoorOpen size={18}/>
        </div>
        </Link>
      </li>
    </ul>
        </nav>
    )
}

export default TournementNavbar;