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
    <div
      className="relative w-full h-[500px] sm:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${PitchImage})` }}
    >
      {/* Goalkeeper */}
      {teamData.goalkeeper.map((player, index) => (
        <div
          key={`goalkeeper-${player.number}-${index}`}
          className="absolute"
          style={{ top: '17%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <PlayerCircle
            initials={player.number.toString()}
            name={player.name}
            showNumberOutside={false}
            stackNameBelow={true} 
          />
        </div>
      ))}

      {/* Defenders (4 in a 4-3-3 formation) */}
      {teamData.defenders.map((player, index) => (
        <div
          key={`defender-${player.number}-${index}`}
          className="absolute"
          style={{
            top: '40%',
            left: `${25 + index * 45}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <PlayerCircle
            initials={player.number.toString()}
            name={player.name}
            showNumberOutside={false}
            stackNameBelow={true} 
          />
        </div>
      ))}

      {/* Midfielders (3 in a 4-3-3 formation) */}
      {teamData.midfielders.map((player, index) => (
        <div
          key={`midfielder-${player.number}-${index}`}
          className="absolute"
          style={{
            top: '60%',
            left: `${15 + index * 30}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <PlayerCircle
            initials={player.number.toString()}
            name={player.name}
            showNumberOutside={false}
            stackNameBelow={true} 
          />
        </div>
      ))}

      {/* Forward (1 in a 4-3-3 formation) */}
      {teamData.forward.map((player, index) => (
        <div
          key={`forward-${player.number}-${index}`}
          className="absolute"
          style={{ top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <PlayerCircle
            initials={player.number.toString()}
            name={player.name}
            showNumberOutside={false}
            stackNameBelow={true} 
          />
        </div>
      ))}
    </div>
  );
};

export default PitchView;