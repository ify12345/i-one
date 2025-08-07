/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import MatchCard from './MatchCard';
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/redux/store';

const FixturesComponent: React.FC = () => {

  const { sessions } = useAppSelector(state => state.sessions);

  return (
    <div className="flex flex-col w-full lg:w-1/2 h-auto shadow-sm">
      <h2 className="text-lg font-bold text-black mb-3">Upcoming Fixtures</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden gap-4 h-auto py-6 overflow-y-auto">
        {sessions.map((match, index) => (
            <MatchCard
              key={index}
              teamOne={match.teamOne}
              teamTwo={match.teamTwo}
              matchType={match.matchType}
            />
        ))}
      </div>
    </div>
  );
};

export default FixturesComponent;