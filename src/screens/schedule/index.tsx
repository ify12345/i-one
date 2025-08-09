/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import Calendar2Svg from '@/assets/svg/Calendar2Svg'
import CalendarPolygon from '@/components/CalendarPolygon'
import HomeLayout from '@/components/layouts/HomeLayout'
import { Link, useNavigate } from 'react-router-dom'
import PlayerCircle from '@/components/PlayerCircle'
import MatchCard from '@/components/MatchCard'
import { match } from 'assert'
import TeamPolygon from '@/components/TeamPolygon'
import TeamPolygon2 from '@/components/TeamPolygon2'
import { time } from 'console'
import ScheduleMatchCard from '@/components/ScheduleMatchCard'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

export default function Schedule() {
  const [expanded, setExpanded] = useState(false);
  const [dates, setDates] = useState<
    Array<{
      id: number
      dateNumber: string
      dayName: string
      isToday: boolean
    }>
  >([])
  const [activeTab, setActiveTab] = useState('all') // 'all', 'tournaments', or 'friendlies'
  const scrollRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Get today's date
  const getToday = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return today
  }

  useEffect(() => {
    const today = getToday()
    const newDates = []

    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() + i)
      const dayNum = date.getDate()
      const isToday = date.getTime() === today.getTime()

      newDates.push({
        id: date.getTime(),
        dateNumber: `${dayNum}`,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        isToday,
      })
    }

    setDates(newDates)

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = 0
      }
    }, 100)
  }, [])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    navigate(`${tab}`) // Update URL
  }
  const match = [
    {
      teams: {
        team1: { initials: 'KP', name: 'Kano Pillars' },
        team2: { initials: 'PT', name: 'Porthacourt Thugs' },
        matchType: 'Friendly Match',
      },
      time: '14:00',
      minute: "85'",
      team1score: 2,
      team2score: 0
    },
    {
      teams: {
        team1: { initials: 'TF', name: 'Turf Furies' },
        team2: { initials: 'LP', name: 'Lakowe Players' },
        matchType: 'League Match',
      },
      time: '16:30',
      minute: "75'",
      team1score: "?",
      team2score: "?"
    },
    {
      teams: {
        team1: { initials: 'EK', name: 'Eko Kings' },
        team2: { initials: 'VP', name: 'Victoria Pros' },
        matchType: 'Friendly Match',
      },
      time: '19:30',
      minute: "85'",
      team1score: "?",
      team2score: "?"
    },
    {
      teams: {
        team1: { initials: 'LO', name: 'Lekki Oscroh' },
        team2: { initials: 'GW', name: 'Gidan Warriors' },
        matchType: 'Cup Finals',
      },
      time: '20:30',
      minute: "85'",
      team1score: "?",
      team2score: "??"
    },
    {
      teams: {
        team1: { initials: 'EK', name: 'Eko Kings' },
        team2: { initials: 'VP', name: 'Victoria Pros' },
        matchType: 'Friendly Match',
      },
      time: '4:30',
      minute: "85'",
      team1score: "?",
      team2score: "?"
    },
    {
      teams: {
        team1: { initials: 'LO', name: 'Lekki Oscroh' },
        team2: { initials: 'GW', name: 'Gidan Warriors' },
        matchType: 'Cup Finals',
      },
      time: '16:30',
      minute: "85'",
      team1score: "?",
      team2score: "?"
    },
  ]

  return (
    <HomeLayout>
      <div className="flex flex-col lg:flex-row gap-[54px] lg:px-[80px] w-full">
        <div className="lg:w-5/12 w-full">
          <div className="w-full bg-white border-[1px] p-[40px] h-[308px] rounded-[20px] shadow-md border-[#00E0821A]">
            <div className="flex w-full items-center justify-between">
              <h1 className="font-[600] text-[20px] lg:text-[32px]">Match Schedule</h1>
              <Calendar2Svg />
            </div>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 mt-[32px] pb-2 scrollbar-hide"
            >
              {dates.map(item => (
                <div key={item.id} className="flex flex-col items-center gap-1">
                  <CalendarPolygon
                    id={item.id}
                    date={item.dateNumber}
                    day={item.dayName}
                    isActive={item.isToday}
                    onClick={() => { }}
                  />
                  <span className="text-sm text-gray-600">{item.dayName}</span>
                  {item.isToday && (
                    <span className="text-xs flex font-medium text-[#00E082]">
                      Today
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 w-full">
          <div className="flex w-full mb-4 gap-[8px] ">
            <Link
              to="?all"
              className={`rounded-[3px] py-[8px] px-[18px]  ${activeTab === 'all' ? 'bg-[#00E082] text-white' : 'bg-gray-200'}`}
              onClick={() => handleTabClick('all')}
            >
              All
            </Link>
            <Link
              to="?tournaments"
              className={`rounded-[3px] py-[8px] px-[18px]  ${activeTab === 'tournaments' ? 'bg-[#00E082] text-white' : 'bg-gray-200'}`}
              onClick={() => handleTabClick('tournaments')}
            >
              Tournaments
            </Link>
            <Link
              to="?friendlies"
              className={`rounded-[3px] py-[8px] px-[18px]  ${activeTab === 'friendlies' ? 'bg-[#00E082] text-white' : 'bg-gray-200'}`}
              onClick={() => handleTabClick('friendlies')}
            >
              Friendlies
            </Link>
          </div>

          {/* Dynamic Content Area */}
          <div className=" p-6 rounded-[20px] shadow-md border-[#00E0821A]">
            {activeTab === 'all' && (
              <div className=''>
                <h3 className="font-semibold text-lg mb-4">All Matches</h3>

                <div className="bg-mint-100 rounded-md   py-2">
                  <div className={`flex items-center bg-[#ECFFF8] h-full border-b-2 px-[36px]  py-[20px] ${expanded ? 'border-[#DFDFDF]' : 'border-green-500 rounded-b-[10px]'}  justify-between cursor-pointer`} onClick={() => setExpanded(!expanded)}>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-400 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        VI
                      </div>
                      <h2 className="font-semibold text-lg">VI Team</h2>
                    </div>
                    <div className='border-l h-auto  border-[#DFDFDF]'></div>
                    <div className="text-xl px-2">{expanded ? <FaArrowUp /> : <FaArrowDown />}</div>
                  </div>

                  {expanded && (
                    <div className='border-b-2 border-b-green-500 rounded-b-[10px] '>
                      <div className=" flex flex-col gap-4 h-full     ">
                        {match.map((match, idx) => (
                          <ScheduleMatchCard
                            key={idx}
                            team1={match.teams.team1}
                            team2={match.teams.team2}
                            time={match.time}
                            minute={match.minute}
                            team1score={match.team1score}
                            team2score={match.team2score}

                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {activeTab === 'tournaments' && (
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Tournament Matches
                </h3>
                {match.map((match, idx) => (
                  <ScheduleMatchCard
                    key={idx}
                    team1={match.teams.team1}
                    team2={match.teams.team2}
                    time={match.time}
                    minute={match.minute}
                    team1score={match.team1score}
                    team2score={match.team2score}
                  />
                ))}
              </div>
            )}
            {activeTab === 'friendlies' && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Friendly Matches</h3>
                {/* Add your friendly matches content here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}