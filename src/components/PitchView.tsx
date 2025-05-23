import React from 'react';
import PlayerCircle from './PlayerCircle'; // Adjust path as needed
import PitchImage from '@/assets/images/greenPitch.png'; 

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

interface PitchViewProps {
  teamData: TeamData;
}

const PitchView: React.FC<PitchViewProps> = ({ teamData }) => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${PitchImage})` }}>
      {/* Goalkeeper */}
      {teamData.goalkeeper.map((player, index) => (
        <div
          key={`goalkeeper-${player.number}-${index}`}
          className="absolute"
          style={{ top: '17%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <PlayerCircle number={player.number} initials={player.initials} name={player.name} />
        </div>
      ))}
      {/* Defenders (4 in a 4-3-3 formation) */}
      {teamData.defenders.map((player, index) => (
        <div
          key={`defender-${player.number}-${index}`}
          className="absolute"
          style={{
            top: '70%',
            left: `${20 + index * 20}%`, // Spread defenders across the pitch (20%, 40%, 60%, 80%)
            transform: 'translate(-50%, -50%)',
          }}
        >
          <PlayerCircle number={player.number} initials={player.initials} name={player.name} />
        </div>
      ))}

      {/* Midfielders (3 in a 4-3-3 formation) */}
      {teamData.midfielders.map((player, index) => (
        <div
          key={`midfielder-${player.number}-${index}`}
          className="absolute"
          style={{
            top: '50%',
            left: `${25 + index * 25}%`, // Spread midfielders (25%, 50%, 75%)
            transform: 'translate(-50%, -50%)',
          }}
        >
          <PlayerCircle number={player.number} initials={player.initials} name={player.name} />
        </div>
      ))}

      {/* Forward (1 in a 4-3-3 formation) */}
      {teamData.forward.map((player, index) => (
        <div
          key={`forward-${player.number}-${index}`}
          className="absolute"
          style={{ top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <PlayerCircle number={player.number} initials={player.initials} name={player.name} />
        </div>
      ))}
      
    </div>
  );
};

export default PitchView;