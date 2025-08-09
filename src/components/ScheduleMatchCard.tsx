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
  team2score: string | number; // Score for team 2
  minute: string;
}

const ScheduleMatchCard: React.FC<ScheduleMatchCardProps> = ({
  team1,
  team2,
  time,
  team1score,
  team2score,
  minute,
}) => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState<string>('10:06 AM')
  const navigate = useNavigate()

  return (
    <div className='flex flex-col h-full '>
    <div className="flex px-[16px] h-full rounded-b-[10px]   w-full items-center bg-[#ECFFF8] ">
      <div className="text-sm   transform -rotate-90 ">
        {time}
      </div>
      <div className='border-l-[1px] mx-[8px] h-[80px]'></div>
      <div className=" w-full   h-full py-3">
        <div className='flex w-full flex-col gap- border-[#DFDFDF]'>

          <TeamPolygon2
            initials={team1.initials}
            name={team1.name}
            time={''}
            team1score={Number(team1score)}
            team2score={Number(team2score)}
            minute={minute}
          />
          <span className='w-full px-10 flex justify-end'>{minute}</span>
          <TeamPolygon2
            initials={team2.initials}
            time={''}
            name={team2.name}
            team1score={Number(team1score)}
            team2score={Number(team2score)}
            minute={minute}
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default ScheduleMatchCard
