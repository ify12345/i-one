/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import teamPolygon from '../assets/images/Polygon.png';


interface TeamPolygon2Props {
  initials: string;
  name: string;
  time: string
  team1score?: string;
  team2score?: string;
  minute?: string;
  joined?: boolean; // Optional prop to indicate if the user has joined the match
}

const TeamPolygon2: React.FC<TeamPolygon2Props> = ({ initials, name, time, team1score, minute, joined, team2score }) => {
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
     
    </div>
  );
};

export default TeamPolygon2;