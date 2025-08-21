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
      <div className="flex h-full  border-b   border-b-stroke w-full items-center bg-[#ECFFF8] ">
        <div className="text-sm   border-r h-full transform -rotate-90 ">
          {time}
        </div>
        <div className='border-l mx-[10px] h-[80px]'></div>


        <div className=" w-[80%] flex   h-full py-3">

          <div className='flex w-full px-1 md:px-2 relative flex-col gap-4 border-stroke'>

            <TeamPolygon2
              initials={team1.initials}
              name={team1.name}
              time={''}
              team1score={team1score}
           
             
            />

            <TeamPolygon2
              initials={team2.initials}
              time={''}
              name={team2.name}
           
              team2score={team2score}
            
            />

          </div>

        </div>

        <div className={`flex items-center flex-end ${minute ? 'w-[10%]' : 'w-[18%]'} h-full`}>
          <span className='w-full'>
            {
              minute ? <span>{minute}</span> : <span className='text-black'>[Timer]</span>
            }

          </span>

          <div className={`border-l ${joined ? 'ml-4' : 'mx-[10px]'} h-[80px]`}></div>

          <div className={`flex  items-center ${joined ? '-rotate-90 transform px-2' : 'px-[12px] md:px-[10px] '}`}>

            {joined ? <button className='text-black text-xs p-2 rounded-md bg-primary'>Joined</button>
              : (
                <div>
                  <p>
                    {
                      team1score ? <span>{team1score}</span> : <span className='text-black'>-</span>
                    }
                  </p>
                  <p>
                    {team2score ? <span>{team2score}</span> : <span className='text-black'>-</span>}
                  </p>
                </div>
              )

            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default ScheduleMatchCard
