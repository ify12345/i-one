import HomeLayout from '@/components/layouts/HomeLayout';
import React, { useState } from 'react';
import LiveMatch from '@/components/LiveMatch';
import PlayerCircle from '@/components/PlayerCircle'; // Adjust path as needed
import ShoeSvg from '@/assets/svg/ShoeSvg';
import  BallSvg  from '@/assets/svg/BallSvg';
import MatchDetails from '@/components/MatchDetails';

interface Player {
  number: number;
  initials: string;
  name: string;
  assists: number;
  goals: number;
}

export default function LivePage() {
  // Example player data with initial stats
  const [players, setPlayers] = useState<Player[]>([
    { number: 9, initials: 'JD', name: 'John Doe', assists: 2, goals: 0 },
    { number: 10, initials: 'AD', name: 'Alice Doe', assists: 1, goals: 3 },
    { number: 7, initials: 'BD', name: 'Bob Doe', assists: 0, goals: 1 },
  ]);

  // Handlers to update assists and goals for a specific player
  const handleAssistChange = (index: number, change: number) => {
    setPlayers((prev) =>
      prev.map((player, i) =>
        i === index
          ? { ...player, assists: Math.max(0, player.assists + change) }
          : player
      )
    );
  };

  const handleGoalChange = (index: number, change: number) => {
    setPlayers((prev) =>
      prev.map((player, i) =>
        i === index
          ? { ...player, goals: Math.max(0, player.goals + change) }
          : player
      )
    );
  };

  return (
    <HomeLayout activeNavId={5}>
      <div className="flex flex-col md:flex-row  p-4 sm:p-6  mx-auto w-full gap-10">
        <LiveMatch
          team1={{ initials: 'TN', name: 'Team Name' }}
          team2={{ initials: 'TN', name: 'Team Name' }}
          score="3-0"
          time="75:05:36"
          player1="Player Name 10"
          player2="Player Name 10"
          location="Tiger Sports Sangotedo, Lagos"
         
        />
        <MatchDetails isLiveMatch={true} />
        {/* <MatchDetails />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            {players.map((player, index) => (
              <div
                key={player.number}
                className="bg-green-50 border-b-2 border-green-200 p-4 sm:p-6 rounded-lg flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <PlayerCircle
                    number={player.number}
                    initials={player.initials}
                    name={player.name}
                    showNumberOutside={true}
                    stackNameBelow={false}
                  />
                  <span className="text-blue-700">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-2">
                    <ShoeSvg className="text-gray-600 w-5 h-5" />
                    <span className="text-gray-600">Assist: {player.assists}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BallSvg className="text-gray-600 w-5 h-5" />
                    <span className="text-gray-600">Goal: {player.goals}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-4 bg-green-100 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <ShoeSvg className="text-gray-600 w-5 h-5" />
                    <span className="text-gray-600">Assist</span>
                    <button
                      onClick={() => handleAssistChange(index, -1)}
                      className="bg-black text-white w-8 h-6 flex items-center justify-center rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-white text-black w-8 h-6 flex items-center justify-center border-t border-b">
                      {player.assists}
                    </span>
                    <button
                      onClick={() => handleAssistChange(index, 1)}
                      className="bg-black text-white w-8 h-6 flex items-center justify-center rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BallSvg className="text-gray-600 w-5 h-5" />
                    <span className="text-gray-600">Goal</span>
                    <button
                      onClick={() => handleGoalChange(index, -1)}
                      className="bg-black text-white w-8 h-6 flex items-center justify-center rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-white text-black w-8 h-6 flex items-center justify-center border-t border-b">
                      {player.goals}
                    </span>
                    <button
                      onClick={() => handleGoalChange(index, 1)}
                      className="bg-black text-white w-8 h-6 flex items-center justify-center rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </HomeLayout>
  );
}