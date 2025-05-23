import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlayerCircle from '../components/PlayerCircle'; // Adjust path as needed
import SquadSvg from '@/assets/svg/SquadSvg';
import PitchSvg from '@/assets/svg/PitchSvg';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import PitchView from '../components/PitchView'; // Adjust path as needed

// Define the player data structure
interface Player {
  number: number;
  initials: string;
  name: string;
}

interface TeamData {
  goalkeeper: Player[];
  defenders: Player[];
  midfielders: Player[];
  forward: Player[];
  substitutes: Player[];
}

interface PlayersData {
  [key: string]: TeamData;
  T1: TeamData;
  T2: TeamData;
}

const MatchDetails: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<keyof PlayersData>('T1');
  const [activeTab, setActiveTab] = useState<'Lineups' | 'Substitutes'>('Lineups');
  const [viewMode, setViewMode] = useState<'list' | 'pitch'>('list'); // Add view mode state

  const players: PlayersData = {
    T1: {
      goalkeeper: [{ number: 1, initials: 'JD', name: 'John Doe' }],
      defenders: [
        { number: 2, initials: 'AD', name: 'Alice Doe' },
        { number: 3, initials: 'BD', name: 'Bob Doe' },
      ],
      midfielders: [
        { number: 7, initials: 'CD', name: 'Charlie Doe' },
        { number: 10, initials: 'ED', name: 'Emma Doe' },
        { number: 11, initials: 'FD', name: 'Frank Doe' },
      ],
      forward: [{ number: 9, initials: 'GD', name: 'Grace Doe' }],
      substitutes: [
        { number: 1, initials: 'ZZ', name: 'Zanku Zero' },
        { number: 2, initials: 'CT', name: 'Crypto Tero' },
        { number: 2, initials: 'HV', name: 'Hank Viru' },
        { number: 4, initials: 'FC', name: 'Fanaka Calisto' },
      ],
    },
    T2: {
      goalkeeper: [{ number: 1, initials: 'JH', name: 'Jane Hill' }],
      defenders: [
        { number: 4, initials: 'KH', name: 'Kate Hill' },
        { number: 5, initials: 'LH', name: 'Liam Hill' },
      ],
      midfielders: [
        { number: 8, initials: 'MH', name: 'Mia Hill' },
        { number: 12, initials: 'NH', name: 'Noah Hill' },
        { number: 13, initials: 'OH', name: 'Olivia Hill' },
      ],
      forward: [{ number: 6, initials: 'PH', name: 'Peter Hill' }],
      substitutes: [
        { number: 1, initials: 'ZZ', name: 'Zack Zenith (T2)' },
        { number: 2, initials: 'CT', name: 'Cody Titan (T2)' },
        { number: 3, initials: 'HV', name: 'Hugo Vale (T2)' },
        { number: 4, initials: 'FC', name: 'Felix Cruz (T2)' },
      ],
    },
  };

  const currentPlayers: TeamData = players[selectedTeam];

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 max-w-[600px] mx-auto w-full">
      <div className="flex flex-col gap-4">
        <div className="flex text-lg justify-evenly">
          <div
            className={`flex items-center justify-center py-2 w-full ${
              activeTab === 'Lineups' ? 'border-primary border-b-2' : ''
            }`}
            onClick={() => setActiveTab('Lineups')}
          >
            <button className="text-gray-500 hover:text-gray-700">Lineups</button>
          </div>
          <div
            className={`flex items-center justify-center py-2 w-full ${
              activeTab === 'Substitutes' ? 'border-primary border-b-2' : ''
            }`}
            onClick={() => setActiveTab('Substitutes')}
          >
            <button className="text-gray-500 hover:text-gray-700">Substitutes</button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTeam('T1')}
              className={`text-black px-2 py-1 rounded text-sm sm:text-base ${
                selectedTeam === 'T1' ? 'bg-primary font-bold' : 'bg-gray-300'
              }`}
            >
              T1
            </button>
            <button
              onClick={() => setSelectedTeam('T2')}
              className={`text-black px-2 py-1 rounded text-sm sm:text-base ${
                selectedTeam === 'T2' ? 'bg-primary font-bold' : 'bg-gray-300'
              }`}
            >
              T2
            </button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'opacity-50' : ''}>
              <SquadSvg />
            </button>
            {activeTab === 'Lineups' && (
              <button onClick={() => setViewMode('pitch')} className={viewMode === 'pitch' ? 'opacity-50' : ''}>
                <PitchSvg />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {activeTab === 'Lineups' ? (
          viewMode === 'list' ? (
            <>
              <h3 className="text-lg sm:text-xl font-semibold text-black">Goalkeeper</h3>
              <div className="flex flex-col gap-2">
                {currentPlayers.goalkeeper.map((player) => (
                  <div
                    key={player.number}
                    className="bg-green-50 border-b-2 border-green-200 p-2 flex justify-between items-center"
                  >
                    <PlayerCircle
                      number={player.number}
                      initials={player.initials}
                      name={player.name}
                    />
                    <FaArrowRightLong />
                  </div>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">Defenders</h3>
              <div className="flex flex-col gap-2">
                {currentPlayers.defenders.map((player) => (
                  <div
                    key={player.number}
                    className="bg-green-50 border-b-2 border-green-200 p-2 flex justify-between items-center"
                  >
                    <PlayerCircle
                      number={player.number}
                      initials={player.initials}
                      name={player.name}
                    />
                    <FaArrowRightLong />
                  </div>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">Midfielders</h3>
              <div className="flex flex-col gap-2">
                {currentPlayers.midfielders.map((player) => (
                  <div
                    key={player.number}
                    className="bg-green-50 border-b-2 border-green-200 p-2 flex justify-between items-center"
                  >
                    <PlayerCircle
                      number={player.number}
                      initials={player.initials}
                      name={player.name}
                    />
                    <FaArrowRightLong />
                  </div>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">Forward</h3>
              <div className="flex flex-col gap-2">
                {currentPlayers.forward.map((player) => (
                  <div
                    key={player.number}
                    className="bg-green-50 border-b-2 border-green-200 p-2 flex justify-between items-center"
                  >
                    <PlayerCircle
                      number={player.number}
                      initials={player.initials}
                      name={player.name}
                    />
                    <FaArrowRightLong />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <PitchView teamData={currentPlayers} />
          )
        ) : (
          <>
            <h3 className="text-lg sm:text-xl font-semibold text-black">Substitutes</h3>
            <div className="flex flex-col gap-2">
              {currentPlayers.substitutes.map((player) => (
                <div
                  key={player.number}
                  className="bg-green-50 border-b-2 border-green-200 p-2 flex justify-between items-center"
                >
                  <PlayerCircle
                    number={player.number}
                    initials={player.initials}
                    name={player.name}
                  />
                  <FaCheck />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;