import React, { useState, useEffect } from 'react';
import TeamPolygon from '../components/TeamPolygon';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

interface MatchCardProps {
  teamOne: { name: string };
  teamTwo: { name: string };
  matchType: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ teamOne, teamTwo, matchType }) => {
  const [currentTime, setCurrentTime] = useState<string>('10:06 AM');
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date('2025-05-19T09:06:00');

    const interval = setInterval(() => {
      now.setSeconds(now.getSeconds() + 1);
      const displayHours = now.getHours();
      const displayMinutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${displayHours}:${displayMinutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getInitials = (name: string): string => {
    const words = name.trim().split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase() + words[0].charAt(0).toUpperCase();
    }
    const first = words[0].charAt(0).toUpperCase();
    const last = words[words.length - 1].charAt(0).toUpperCase();
    return `${first}${last}`;
  };

  const handleNavigate = () => {
    navigate('/upcoming-match', { state: { 
       t1:teamOne,
       t2:teamTwo,
       matchType:matchType
    } });
  };

  return (
    <button onClick={handleNavigate} className="bg-[#eefff9] p-4 w-[312px] mx-auto flex flex-col justify-between items-center shadow-lg rounded-md hover:scale-95 transition-all duration-300">
      <div className='flex justify-between items-center gap-7'>
        <p className="text-black text-lg">{currentTime}</p>
        <p className="text-black text-lg mb-2">{matchType}</p>
        <FaArrowRightLong />
      </div>

      <div className="flex items-center space-x-4">
        <TeamPolygon initials={getInitials(teamOne.name)} name={teamOne.name} />
        <span className="text-black font-bold text-lg">VS</span>
        <TeamPolygon initials={getInitials(teamTwo.name)} name={teamTwo.name} />
      </div>
    </button>
  );
};

export default MatchCard;
