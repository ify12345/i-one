/* eslint-disable prefer-const */

import React, { useState, useEffect } from 'react';
import TeamPolygon from '../components/TeamPolygon';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



interface MatchCardProps {
  teamOne: { initials: string; name: string };
  teamTwo: { initials: string; name: string };
  matchType: string; // e.g., "Friendly Match"
}

const MatchCard: React.FC<MatchCardProps> = ({ teamOne, teamTwo, matchType }) => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState<string>('10:06 AM');
  const navigate = useNavigate()
  useEffect(() => {
    // Create a Date object with the current date and time (10:06 AM WAT, May 19, 2025)
    const now = new Date('2025-05-19T09:06:00'); // 10:06 AM WAT is UTC+1

    // Update time every second
    const interval = setInterval(() => {
      now.setSeconds(now.getSeconds() + 1); // Increment by 1 second

      // Format the time as "HH:MM"
      let displayHours = now.getHours();
      const displayMinutes = now.getMinutes().toString().padStart(2, '0');

      // Convert to 24-hour format for "14:00" style
      setCurrentTime(`${displayHours}:${displayMinutes}`);
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
const handleNavigate = () => {
  navigate('/upcoming-match', { state: { t1: teamOne, t2: teamTwo } })
}

  return (
    
    <button onClick={handleNavigate} className="bg-[#eefff9] p-4 w-[312px]  mx-auto flex flex-col justify-between items-center shadow-lg rounded-md hover:scale-95 transition-all duration-300" >
      <div className='flex justify-between items-center gap-7'>
        <p className="text-black text-lg">{currentTime}</p>
        <p className="text-black text-lg mb-2">{matchType}</p>
        <FaArrowRightLong />
      </div>

      <div className="flex items-center space-x-4">
        <TeamPolygon initials={teamOne.initials} name={teamOne.name} />
        <span className="text-black font-bold text-lg">VS</span>
        <TeamPolygon initials={teamTwo.initials} name={teamTwo.name} />
      </div>



    </button>
  );
};

export default MatchCard;