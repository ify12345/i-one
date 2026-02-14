/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import MatchCard from './MatchCard';
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/redux/store';
import LoaderPolygonSvg from '@/assets/svg/LoaderPolygonSvg';

const FixturesComponent: React.FC = () => {
  const { sessions } = useAppSelector(state => state.sessions);

  // Check if sessions data is available (not empty array)
  const hasData = sessions && sessions.length > 0;

  return (
    <div className="flex flex-col w-full lg:w-1/2 h-auto shadow-sm">
      <h2 className="text-lg font-bold text-black mb-3">Upcoming Fixtures</h2>
      
      {/* Show skeletons when no data is available */}
      {!hasData && (
        <div className="grid grid-cols-1  lg:grid-cols-2 overflow-x-hidden gap-7 h-auto py-6 overflow-y-auto">
          {/* Show 4 skeleton cards while loading */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="bg-white gap-4 w-[312px] max-w-full flex flex-col  justify-center mx-auto h-[164px] rounded-lg shadow-sm p-4 border border-gray-200 animate-pulse">
              {/* Match type skeleton */}
              <div className='flex items-center gap-6 justify-between'>
              <div className="h-4 bg-[#CDCDCD] rounded w-[20%] mb-5"></div>
              <div className="h-4 bg-[#CDCDCD] rounded w-[70%] mb-5"></div>
              <div className="h-4 bg-[#CDCDCD] rounded w-[20%] mb-5"></div>
              </div>
              
              {/* Teams section skeleton */}
              <div className="flex space-x-4 justify-center items-center mb-">
                {/* Team 1 skeleton */}
                <div className="flex flex-col items-center space-y-2">
                 <LoaderPolygonSvg/>
                  <div className="h-3 bg-[#CDCDCD] rounded w-16"></div>
                </div>
                
                {/* VS text skeleton */}
                <div className="h-4 bg-[#CDCDCD] rounded w-8"></div>
                
                {/* Team 2 skeleton */}
                <div className="flex flex-col items-center space-y-2">
                   <LoaderPolygonSvg/>
                  <div className="h-3 bg-[#CDCDCD] rounded w-16"></div>
                </div>
              </div>
              
              {/* Date and time skeleton */}
             
            </div>
          ))}
        </div>
      )}

      {/* Show empty state when sessions is empty array (data fetched but no matches) */}
      {hasData && sessions.length === 0 && (
        <div className="w-full my-4 h-[270px] bg-gray-100 flex items-center justify-center 
                    text-gray-600 font-medium rounded-lg">
          No Upcoming Matches
        </div>
      )}

      {/* Show actual data when available */}
      {hasData && sessions.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden gap-4 h-auto py-6 overflow-y-auto">
          {sessions.map((match, index) => (
            <MatchCard
              key={index}
              teamOne={match.teamOne}
              teamTwo={match.teamTwo}
              matchType={match.matchType}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FixturesComponent;