import React from 'react';

interface PlayerCircleProps {
  initials: string; 
  name: string; 
  number: number; 
}

const PlayerCircle: React.FC<PlayerCircleProps> = ({ initials, name, number }) => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-black font-medium">{number}</p>
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">{initials}</span>
      </div>
      <div>
        
        <p className="text-gray-600 text-sm">{name}</p>
      </div>
    </div>
  );
};

export default PlayerCircle;