/* eslint-disable prefer-const */

import React, { useState, useEffect } from 'react'
import TeamPolygon from '../components/TeamPolygon'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import TeamPolygon2 from './TeamPolygon2'

interface ScheduleMatchCardProps {
  team1: { initials: string; name: string }
  team2: { initials: string; name: string }
  time: string // e.g., "Friendly Match"
}

const ScheduleMatchCard: React.FC<ScheduleMatchCardProps> = ({
  team1,
  team2,
  time,
}) => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState<string>('10:06 AM')
  const navigate = useNavigate()

  return (
    <div className="flex items-center bg-[#ECFFF8] mb-4">
      <div className="text-sm   transform -rotate-90 ">
        {time}
      </div>
        <div className='border-l-[1px] px-2 h-[80px]'></div>
      <div className="   h-full py-3">
        <div className='flex flex-col gap-4 border-[#DFDFDF]'>
        <TeamPolygon2 initials={team1.initials} name={team1.name} time={''} />

        <TeamPolygon2 initials={team2.initials} time={''} name={team2.name} />
      </div>
      </div>
    </div>
  )
}

export default ScheduleMatchCard
