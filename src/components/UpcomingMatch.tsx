import React from 'react';
import TeamPolygon from '../components/TeamPolygon';
import UpcomingSvg from '@/assets/svg/UpcomingSvg';
interface Props {
  team1: { initials: string; name: string };
  team2: { initials: string; name: string };
}
const UpcomingMatch  = ({team1, team2}:Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-10 flex flex-col gap-4 sm:gap-8 max-w-[550px] w-full h-[327px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="font-semibold text-2xl sm:text-3xl mb-5">Upcoming Match</h2>
          <p className="text-gray-600 mb-3 text-sm sm:text-base">Tiger Sports Sangotedo, Lagos</p>
          <p className="text-gray-600 text-sm sm:text-base">Tue, May 20, 2025</p>
        </div>
        <UpcomingSvg />
      </div>
      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
        <TeamPolygon initials={team1.initials} name={team1.name} />
        <span className="text-black font-semibold text-lg border-black border-t-2">14:00</span>
        <TeamPolygon initials={team2.initials} name={team2.name} />
      </div>
    </div>
  );
};

export default UpcomingMatch;