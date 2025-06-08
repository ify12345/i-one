import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlayerCircle from '../components/PlayerCircle'; // Adjust path as needed
import SquadSvg from '@/assets/svg/SquadSvg';
import PitchSvg from '@/assets/svg/PitchSvg';
import { FaArrowRightLong, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import PitchView from '../components/PitchView'; // Adjust path as needed
import ShoeSvg from '@/assets/svg/ShoeSvg'; // Custom SVG for assists
import BallSvg from '@/assets/svg/BallSvg'; // Custom SVG for goals

// Define the player data structure
interface Player {
  number: number;
  initials: string;
  name: string;
  assists?: number; // Optional for initial data
  goals?: number;   // Optional for initial data
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

interface MatchDetailsProps {
  isLiveMatch?: boolean; // Prop to toggle live match features
}

// Initial player data with default assists and goals
const initialPlayers: PlayersData = {
  T1: {
    goalkeeper: [{ number: 1, initials: 'JD', name: 'John Doe', assists: 0, goals: 0 }],
    defenders: [
      { number: 2, initials: 'AD', name: 'Alice Doe', assists: 0, goals: 0 },
      { number: 3, initials: 'BD', name: 'Bob Doe', assists: 0, goals: 0 },
    ],
    midfielders: [
      { number: 7, initials: 'CD', name: 'Charlie Doe', assists: 0, goals: 0 },
      { number: 10, initials: 'ED', name: 'Emma Doe', assists: 0, goals: 0 },
      { number: 11, initials: 'FD', name: 'Frank Doe', assists: 0, goals: 0 },
    ],
    forward: [{ number: 9, initials: 'GD', name: 'Grace Doe', assists: 0, goals: 0 }],
    substitutes: [
      { number: 1, initials: 'ZZ', name: 'Zanku Zero', assists: 0, goals: 0 },
      { number: 2, initials: 'CT', name: 'Crypto Tero', assists: 0, goals: 0 },
      { number: 2, initials: 'HV', name: 'Hank Viru', assists: 0, goals: 0 },
      { number: 4, initials: 'FC', name: 'Fanaka Calisto', assists: 0, goals: 0 },
    ],
  },
  T2: {
    goalkeeper: [{ number: 1, initials: 'JH', name: 'Jane Hill', assists: 0, goals: 0 }],
    defenders: [
      { number: 4, initials: 'KH', name: 'Kate Hill', assists: 0, goals: 0 },
      { number: 5, initials: 'LH', name: 'Liam Hill', assists: 0, goals: 0 },
    ],
    midfielders: [
      { number: 8, initials: 'MH', name: 'Mia Hill', assists: 0, goals: 0 },
      { number: 12, initials: 'NH', name: 'Noah Hill', assists: 0, goals: 0 },
      { number: 13, initials: 'OH', name: 'Olivia Hill', assists: 0, goals: 0 },
    ],
    forward: [{ number: 6, initials: 'PH', name: 'Peter Hill', assists: 0, goals: 0 }],
    substitutes: [
      { number: 1, initials: 'ZZ', name: 'Zack Zenith (T2)', assists: 0, goals: 0 },
      { number: 2, initials: 'CT', name: 'Cody Titan (T2)', assists: 0, goals: 0 },
      { number: 3, initials: 'HV', name: 'Hugo Vale (T2)', assists: 0, goals: 0 },
      { number: 4, initials: 'FC', name: 'Felix Cruz (T2)', assists: 0, goals: 0 },
    ],
  },
};

const MatchDetails: React.FC<MatchDetailsProps> = ({ isLiveMatch = false }) => {
  const [selectedTeam, setSelectedTeam] = useState<keyof PlayersData>('T1');
  const [activeTab, setActiveTab] = useState<'Lineups' | 'Substitutes'>('Lineups');
  const [viewMode, setViewMode] = useState<'list' | 'pitch'>('list');
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({}); // State to manage dropdown
  const [players, setPlayers] = useState<PlayersData>(initialPlayers); // State for player data with assists/goals

  const currentPlayers: TeamData = players[selectedTeam];

  // Toggle dropdown for a specific player
  const toggleDropdown = (playerKey: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [playerKey]: !prev[playerKey],
    }));
  };

  // Update assists for a specific player
  const handleAssistChange = (index: number, change: number, position: keyof TeamData) => {
    setPlayers((prev) => ({
      ...prev,
      [selectedTeam]: {
        ...prev[selectedTeam],
        [position]: prev[selectedTeam][position].map((player, i) =>
          i === index ? { ...player, assists: Math.max(0, (player.assists || 0) + change) } : player
        ),
      },
    }));
  };

  // Update goals for a specific player
  const handleGoalChange = (index: number, change: number, position: keyof TeamData) => {
    setPlayers((prev) => ({
      ...prev,
      [selectedTeam]: {
        ...prev[selectedTeam],
        [position]: prev[selectedTeam][position].map((player, i) =>
          i === index ? { ...player, goals: Math.max(0, (player.goals || 0) + change) } : player
        ),
      },
    }));
  };

  // Render player item with conditional dropdown
  const renderPlayerItem = (player: Player, section: string, index: number, position: keyof TeamData) => {
    const playerKey = `${player.number}-${player.name}`;
    const isDropdownOpen = dropdownOpen[playerKey] || false;

    return (
      <div key={playerKey} className="bg-green-50 border-b-2 border-green-200 p-2 flex flex-col gap-2">
        <div
          onClick={() => toggleDropdown(playerKey)}
          className="flex justify-between items-center cursor-pointer"
        >
          <PlayerCircle
            number={player.number}
            initials={player.initials}
            name={player.name}
            showNumberOutside={true}
            stackNameBelow={false}
          />
          
          {isLiveMatch && (
            <div className="flex items-center justify-between 2 rounded-lg gap-2">
              <div className="flex items-center space-x-2 bg-green-200 rounded-full px-3 py-1">
                <ShoeSvg />
                <span className="text-black font-medium">Assist: {player.assists || 0}</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-200 rounded-full px-3 py-1">
                <BallSvg />
                <span className="text-black font-medium">Goal: {player.goals || 0}</span>
              </div>
            </div>
          )}
          {section === 'Lineups' ? <FaArrowRightLong /> : <FaCheck />}
        </div>
        {isLiveMatch && isDropdownOpen && (
          <div className="p-2 sm:p-4 bg-[#80ffc9] rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoeSvg className="text-gray-600  h-5" />
                <span className="text-gray-600">Assist</span>
                <button
                  onClick={() => handleAssistChange(index, -1, position)}
                  className="bg-black text-white w-8 h-6 flex items-center justify-center rounded-l"
                >
                  -
                </button>
                <span className="bg-white text-black w-8 h-6 flex items-center justify-center border-t border-b">
                  {player.assists || 0}
                </span>
                <button
                  onClick={() => handleAssistChange(index, 1, position)}
                  className="bg-black text-white w-8 h-6 flex items-center justify-center rounded-r"
                >
                  +
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <BallSvg className="text-gray-600  h-5" />
                <span className="text-gray-600">Goal</span>
                <button
                  onClick={() => handleGoalChange(index, -1, position)}
                  className="bg-black text-white w-8 h-6 flex items-center justify-center rounded-l"
                >
                  -
                </button>
                <span className="bg-white text-black w-8 h-6 flex items-center justify-center border-t border-b">
                  {player.goals || 0}
                </span>
                <button
                  onClick={() => handleGoalChange(index, 1, position)}
                  className="bg-black text-white w-8 h-6 flex items-center justify-center rounded-r"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 max-w-[600px] mx-auto w-full">
      <div className="flex flex-col gap-4">
        <div className="flex text-lg justify-evenly">
          <div
            className={`flex items-center justify-center py-2 w-full ${activeTab === 'Lineups' ? 'border-primary border-b-2' : ''}`}
            onClick={() => setActiveTab('Lineups')}
          >
            <button className="text-gray-500 hover:text-gray-700">Lineups</button>
          </div>
          <div
            className={`flex items-center justify-center py-2 w-full ${activeTab === 'Substitutes' ? 'border-primary border-b-2' : ''}`}
            onClick={() => setActiveTab('Substitutes')}
          >
            <button className="text-gray-500 hover:text-gray-700">Substitutes</button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTeam('T1')}
              className={`text-black px-2 py-1 rounded text-sm sm:text-base ${selectedTeam === 'T1' ? 'bg-primary font-bold' : 'bg-gray-300'}`}
            >
              T1
            </button>
            <button
              onClick={() => setSelectedTeam('T2')}
              className={`text-black px-2 py-1 rounded text-sm sm:text-base ${selectedTeam === 'T2' ? 'bg-primary font-bold' : 'bg-gray-300'}`}
            >
              T2
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? '' : 'opacity-50'}
            >
              <SquadSvg
                className={viewMode === 'list' ? 'fill-green-500' : 'fill-gray-500'}
              />
            </button>
            {activeTab === 'Lineups' && (
              <button
                onClick={() => setViewMode('pitch')}
                className={viewMode === 'pitch' ? '' : 'opacity-50'}
              >
                <PitchSvg
                  className={viewMode === 'pitch' ? 'fill-green-500' : 'fill-gray-500'}
                />
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
                {currentPlayers.goalkeeper.map((player, index) =>
                  renderPlayerItem(player, 'Lineups', index, 'goalkeeper')
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">Defenders</h3>
              <div className="flex flex-col gap-2">
                {currentPlayers.defenders.map((player, index) =>
                  renderPlayerItem(player, 'Lineups', index, 'defenders')
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">Midfielders</h3>
              <div className="flex flex-col gap-2">
                {currentPlayers.midfielders.map((player, index) =>
                  renderPlayerItem(player, 'Lineups', index, 'midfielders')
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black">Forward</h3>
              <div className="flex flex-col gap-2">
                {currentPlayers.forward.map((player, index) =>
                  renderPlayerItem(player, 'Lineups', index, 'forward')
                )}
              </div>
            </>
          ) : (
            <PitchView teamData={currentPlayers} />
          )
        ) : (
          <>
            <h3 className="text-lg sm:text-xl font-semibold text-black">Substitutes</h3>
            <div className="flex flex-col gap-2">
              {currentPlayers.substitutes.map((player, index) =>
                renderPlayerItem(player, 'Substitutes', index, 'substitutes')
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;