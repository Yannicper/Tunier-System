'use client';

import { TournamentProvider } from '@/context/TournamentContext';

export default function Layout({ children }) {
  return (
    <TournamentProvider>
      {children}
    </TournamentProvider>
  );
}
