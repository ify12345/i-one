import React from 'react';
import TeamPolygon from '../components/TeamPolygon';
import UpcomingSvg from '@/assets/svg/UpcomingSvg';
import { PiSoccerBallFill } from "react-icons/pi";

interface Props {
  team1: { initials: string; name: string };
  team2: { initials: string; name: string };
  score: string; 
  time: string; 
  player1: string; 
  player2: string;
  location?: string; 
}

const LiveMatch: React.FC<Props> = ({ team1, team2, score, time, player1, player2, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-10 flex flex-col gap-4 sm:gap-8 max-w-[550px] w-full h-[400px] ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="font-semibold text-2xl sm:text-3xl mb-5">Live Match</h2>
          {location && <p className="text-gray-600 mb-3 text-sm sm:text-base">{location}</p>}
          <p className="text-gray-600 text-sm sm:text-base">
            {new Date().toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', })}
          </p>
        </div>
        <UpcomingSvg className='mb-auto' />
      </div>
      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
        <TeamPolygon initials={team1.initials} name={team1.name} />
        <div className="flex flex-col items-center">
          <span className="text-black font-semibold text-3xl border-black border-b-2">{score}</span>
          <span className="text-gray-600 text-sm">{time}</span>
        </div>
        <TeamPolygon initials={team2.initials} name={team2.name} />
      </div>
      <div className="flex items-center justify-between border-t border-gray-300 pt-4">
        <span className="text-gray-600 text-lg">{player1}'</span>
        <PiSoccerBallFill className="text-black text-2xl" />
        <span className="text-gray-600 text-lg">{player2}'</span>
      </div>
    </div>
  );
};

export default LiveMatch;