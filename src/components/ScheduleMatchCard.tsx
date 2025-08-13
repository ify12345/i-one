/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import React, { useState, useEffect } from 'react'
import TeamPolygon from '../components/TeamPolygon'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import TeamPolygon2 from './TeamPolygon2'

interface ScheduleMatchCardProps {
  team1: {
    initials: string; name: string
  }
  team2: { initials: string; name: string }
  time: string // e.g., "Friendly Match"
  team1score: string | number; // Score for team 1
  team2score: string | number ; // Score for team 2
  minute: string;
  joined: boolean; // Indicates if the user has joined the match
}

const ScheduleMatchCard: React.FC<ScheduleMatchCardProps> = ({
  team1,
  team2,
  time,
  team1score,
  team2score,
  minute,
  joined
}) => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState<string>('10:06 AM')
  const navigate = useNavigate()

  return (
    <div className='flex flex-col  h-full '>
    <div className="flex lg:px-[16px] h-full  border-b-[1px]   border-b-[#DFDFDF]   w-full items-center bg-[#ECFFF8] ">
      <div className="text-sm   transform -rotate-90 ">
        {time}
      </div>
      <div className='border-l-[1px] mx-[8px] h-[80px]'></div>
      <div className=" w-full flex   h-full py-3">
        <div className='flex w-full px-1 md:px-2 relative  flex-col gap-4  border-[#DFDFDF]'>

          <TeamPolygon2
            initials={team1.initials}
            name={team1.name}
            time={''}
            team1score={team1score}
           
           
          />
          <span className='w-full absolute top-[45%] right-[48px]  md:right-[72px]  flex  justify-end'>{minute}</span>
          <div className='absolute top-[25%] md:right-[48px] right-[36px] left-[8px] border-[#DFDFDF]  border-r-[1px]  h-[80px]'></div>
          <TeamPolygon2
            initials={team2.initials}
            time={''}
              initialss={team1.initials}
           
            name={team2.name}
          
            team2score={team2score}
         
          />
        </div>
         <div className='flex items-center'>
      
    {/* <div className=' flex px-2 text-sm  flex-col '>
      {joined ? <p className='text-[#00E082] transform -rotate-90'>Joined</p> : <div> <p>{team1score}</p>
      <p>{team2score}</p> </div>}
     
      </div> */}
      </div>
      </div>
      </div>
    </div>
  )
}

export default ScheduleMatchCard
