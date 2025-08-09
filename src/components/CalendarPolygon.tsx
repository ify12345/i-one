import React from 'react';
import activePolygonImage from '@/assets/images/Polygon 5.png';
import inactivePolygonImage from '@/assets/images/Polygon 5 (1).png';

interface CalendarPolygonProps {
  id: number;
  date: string;
  day: string;
  isActive: boolean;
  onClick: () => void;
}

const CalendarPolygon: React.FC<CalendarPolygonProps> = ({ 
  date, 
  day, 
  isActive, 
  onClick
}) => {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[80px]">
      {/* Polygon Image */}
      <div 
        className="relative w-[80px] h-[80px] cursor-pointer"
        onClick={onClick}
      >
        <img 
          src={isActive ? activePolygonImage : inactivePolygonImage} 
          alt="calendar day"
          className="absolute inset-0 w-full h-full object-contain"
        />
        <div className={`
          relative z-10 w-full h-full flex items-center justify-center
          ${isActive ? 'text-white' : 'text-[#333]'}
        `}>
          <span className="text-lg font-bold">{date}</span>
        </div>
      </div>
      
      {/* Day name positioned below polygon */}
      <span className="text-sm text-center">{day}</span>
    </div>
  );
};

export default CalendarPolygon;