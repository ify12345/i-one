import React from 'react';
import MatchCard from './MatchCard';

const FixturesComponent: React.FC = () => {
  // Sample match data (replace with API data in a real app)
  const matches = [
    {
      team1: { initials: 'KP', name: 'Kano Pillars' },
      team2: { initials: 'PT', name: 'Porthacourt Thugs' },
      matchType: 'Friendly Match',
    },
    {
      team1: { initials: 'TF', name: 'Turf Furies' },
      team2: { initials: 'LP', name: 'Lakowe Players' },
      matchType: 'League Match',
    },
    {
      team1: { initials: 'EK', name: 'Eko Kings' },
      team2: { initials: 'VP', name: 'Victoria Pros' },
      matchType: 'Friendly Match',
    },
    {
        team1: { initials: 'LO', name: 'Lekki Oscroh' },
        team2: { initials: 'GW', name: 'Gidan Warriors' },
        matchType: 'Cup Finals',
      },
  ];

  return (
    <div className="flex flex-col flex-1 w-full max-w-[657px] h-auto shadow-sm">
      <h2 className="text-lg font-bold text-black mb-3">Upcoming Fixtures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map((match, index) => (
          <MatchCard
            key={index}
            team1={match.team1}
            team2={match.team2}
            matchType={match.matchType}
          />
        ))}
      </div>
    </div>
  );
};

export default FixturesComponent;