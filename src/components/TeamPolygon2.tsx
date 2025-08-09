import React from 'react';
import teamPolygon from '../assets/images/Polygon.png'; 


interface TeamPolygon2Props {
  initials: string; 
  name: string; 
  time: string
  team1score: number;
  team2score: number;
  minute: string; 
}

const TeamPolygon2: React.FC<TeamPolygon2Props> = ({ initials, name, time, team1score, minute, team2score }) => {
  return (
    <div className='relative flex items-center justify-between w-full'>
    <div className=" flex  w-full gap-3 items-center">
      {time}
      <div
        className="w-16 h-16 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${teamPolygon})` }}
      >
        <span className="text-white font-bold text-xl">{initials}</span>
      </div>
      
      <p className="text-black text-sm mt-2 text-center">{name}</p>
      
    </div>
    <div className='flex items-center'>
      <p>{minute}</p>
    <div className=' flex px-2 flex-col '>
      <p>{team1score}</p>
      <p>{team2score}</p>
      </div>
      </div>
      </div>
  );
};

export default TeamPolygon2;