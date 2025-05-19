import React from 'react';
import teamPolygon from '../assets/images/Polygon.png'; 

interface TeamPolygonProps {
  initials: string; 
  name: string; 
}

const TeamPolygon: React.FC<TeamPolygonProps> = ({ initials, name }) => {
  return (
    <div className="relative flex flex-col items-center">
      
      <div
        className="w-16 h-16 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${teamPolygon})` }}
      >
        <span className="text-white font-bold text-xl">{initials}</span>
      </div>
      
      <p className="text-black text-sm mt-2 text-center">{name}</p>
    </div>
  );
};

export default TeamPolygon;