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
import DropdownSvg from '@/assets/svg/DropdownSvg'
import Dropdown2Svg from '@/assets/svg/Dropdown2Svg'
import PlusSvg from '@/assets/svg/PlusSvg'

export default function Schedule() {
  const [expandedAll, setExpandedAll] = useState<Record<string, boolean>>({
    'VI Team': false,
    'Turf Furies': false,
    'Eko Kings': false
  });
  const [expandedTournaments, setExpandedTournaments] = useState<Record<string, boolean>>({});
  const [expandedFriendlies, setExpandedFriendlies] = useState<Record<string, boolean>>({});
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
      team2score: "?"
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

  // Group matches by team for All tab
  const groupedMatchesAll = [
    {
      teamName: 'VI Team',
      teamInitials: 'VI',
      matches: match.filter(m =>
        m.teams.team1.name === 'Kano Pillars' ||
        m.teams.team2.name === 'Kano Pillars'
      ),

    },
    {
      teamName: 'Turf Furies',
      teamInitials: 'TF',
      matches: match.filter(m =>
        m.teams.team1.name === 'Turf Furies' ||
        m.teams.team2.name === 'Turf Furies'
      )
    },
    {
      teamName: 'Eko Kings',
      teamInitials: 'EK',
      matches: match.filter(m =>
        m.teams.team1.name === 'Eko Kings' ||
        m.teams.team2.name === 'Eko Kings'
      )
    }
  ];

  // Group matches by team for Tournaments tab (non-friendly matches)
  const groupedMatchesTournaments = [
    {
      teamName: 'Turf Furies',
      teamInitials: 'TF',
      matches: match.filter(m =>
        (m.teams.team1.name === 'Turf Furies' ||
          m.teams.team2.name === 'Turf Furies') &&
        m.teams.matchType !== 'Friendly Match'
      )
    },
    {
      teamName: 'Lekki Oscroh',
      teamInitials: 'LO',
      matches: match.filter(m =>
        (m.teams.team1.name === 'Lekki Oscroh' ||
          m.teams.team2.name === 'Lekki Oscroh') &&
        m.teams.matchType !== 'Friendly Match'
      )
    }
  ];

  // Group matches by team for Friendlies tab
  const groupedMatchesFriendlies = [
    {
      teamName: 'Kano Pillars',
      teamInitials: 'KP',
      matches: match.filter(m =>
        (m.teams.team1.name === 'Kano Pillars' ||
          m.teams.team2.name === 'Kano Pillars') &&
        m.teams.matchType === 'Friendly Match'
      )
    },
    {
      teamName: 'Eko Kings',
      teamInitials: 'EK',
      matches: match.filter(m =>
        (m.teams.team1.name === 'Eko Kings' ||
          m.teams.team2.name === 'Eko Kings') &&
        m.teams.matchType === 'Friendly Match'
      )
    }
  ];

  const toggleAll = (teamName: string) => {
    setExpandedAll(prev => ({
      ...prev,
      [teamName]: !prev[teamName]
    }));
  };

  const toggleTournaments = (teamName: string) => {
    setExpandedTournaments(prev => ({
      ...prev,
      [teamName]: !prev[teamName]
    }));
  };

  const toggleFriendlies = (teamName: string) => {
    setExpandedFriendlies(prev => ({
      ...prev,
      [teamName]: !prev[teamName]
    }));
  };

  return (
    <HomeLayout>
      <div className="flex flex-col lg:flex-row gap-[54px] lg:px-[80px] w-full">
        <div className="lg:w-5/12 h-full w-full">
          <div className="w-full bg-white border-[1px]  p-[40px] min-h-[308px] rounded-[20px] shadow-md border-[#00E0821A]">
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

                  {item.isToday && (
                    <span className="text-xs flex font-medium text-primary">
                      Today
                    </span>
                  )}
                </div>
              ))}
            </div>
            <Link to='/schedule-detail' className='w-full mt-[32px] flex items-center rounded-[5px] border-[1px] border-[#7D7D7D] h-[44px]'>
              <button className='text-[16px] px-[21px] flex justify-between items-center text-[#696969] w-full '>New Tournament? <PlusSvg /></button>
            </Link>
          </div>
        </div>

        <div className="lg:w-7/12 w-full">
          <div className="flex justify-between md:max-w-[300px] w-full mb-4 gap-[8px] ">
            <Link
              to="?all"
              className={`rounded-[3px] py-[8px] px-[18px]  ${activeTab === 'all' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              onClick={() => handleTabClick('all')}
            >
              All
            </Link>
            <Link
              to="?tournaments"
              className={`rounded-[3px] py-[8px] px-[18px]  ${activeTab === 'tournaments' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              onClick={() => handleTabClick('tournaments')}
            >
              Tournaments
            </Link>
            <Link
              to="?friendlies"
              className={`rounded-[3px] py-[8px] px-[18px]  ${activeTab === 'friendlies' ? 'bg-primary text-white' : 'bg-gray-200'}`}
              onClick={() => handleTabClick('friendlies')}
            >
              Friendlies
            </Link>
          </div>

          {/* Dynamic Content Area */}
          <div className="mt-[28px]">
            {activeTab === 'all' && (
              <div className='space-y-4'>

                {groupedMatchesAll.map((teamSchedule) => (
                  <div key={teamSchedule.teamName} className="bg-mint-100 rounded-md overflow-hidden">
                    <div
                      className={`flex relative items-center bg-[#ECFFF8] h-full border-b-2 px-[13px] md:px-[48px]  ${expandedAll[teamSchedule.teamName] ? 'border-[#DFDFDF]' : 'border-green-500 rounded-b-[10px]'
                        } justify-between cursor-pointer`}
                      onClick={() => toggleAll(teamSchedule.teamName)}
                    >
                      <div className="flex  items-center  space-x-3">
                        <div className="w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                          {teamSchedule.teamInitials}
                        </div>
                        <h2 className="font-semibold text-lg">{teamSchedule.teamName}</h2>
                      </div>
                      
                      <div className='flex relative gap-[16px] justify-center items-center'>
                        <div className='border-l px-[12px] md:px-[8px] h-[70px] py-0 border-stroke'></div>
                        <div className="text-xl w-full absolute left-[25%] md:left-[130%] r  ">
                          <p className='flex  items-center justify-center'>{expandedAll[teamSchedule.teamName] ? <DropdownSvg /> : <Dropdown2Svg />}</p>
                        </div>
                      </div>

                    </div>

                    {expandedAll[teamSchedule.teamName] && (
                      <div className='border-b-2 border-primary'>
                        <div className="flex flex-col">
                          {teamSchedule.matches.map((match, idx) => (
                            <ScheduleMatchCard
                              key={idx}
                              team1={match.teams.team1}
                              team2={match.teams.team2}
                              time={match.time}
                              minute={match.minute}
                              team1score={match.team1score}
                              team2score={match.team2score}
                              joined={false}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tournaments' && (
              <div className='space-y-4'>

                {groupedMatchesTournaments.map((teamSchedule) => (
                  <div key={teamSchedule.teamName} className="bg-mint-100 rounded-md overflow-hidden">
                    <div
                      className={`flex items-center bg-[#ECFFF8] h-full border-b-2 px-[13px] md:px-[48px] ${expandedTournaments[teamSchedule.teamName] ? 'border-[#DFDFDF]' : 'border-primary rounded-b-[10px]'
                        } justify-between cursor-pointer`}
                      onClick={() => toggleTournaments(teamSchedule.teamName)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                          {teamSchedule.teamInitials}
                        </div>
                        <h2 className="font-semibold text-lg">{teamSchedule.teamName}</h2>
                      </div>
                      <div className='flex relative gap-[16px] justify-center items-center'>
                        <div className='border-l px-[12px] md:px-[8px] h-[70px] py-0 border-[#DFDFDF]'></div>
                        <div className="text-xl w-full absolute left-[25%] md:left-[130%]   ">
                          <p className='flex  items-center justify-center'>{expandedTournaments[teamSchedule.teamName] ? <DropdownSvg /> : <Dropdown2Svg />}</p>
                        </div>
                      </div>
                    </div>

                    {expandedTournaments[teamSchedule.teamName] && (
                      <div className='border-b-2 border-b-green-500 '>
                        <div className="flex flex-col">
                          {teamSchedule.matches.map((match, idx) => (
                            <ScheduleMatchCard
                              key={idx}
                              team1={match.teams.team1}
                              team2={match.teams.team2}
                              time={match.time}
                              minute={match.minute}
                              team1score={match.team1score}
                              team2score={match.team2score}
                              joined={false}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'friendlies' && (
              <div className='space-y-4'>

                {groupedMatchesFriendlies.map((teamSchedule) => (
                  <div key={teamSchedule.teamName} className="bg-mint-100 rounded-md overflow-hidden">
                    <div
                      className={`flex items-center bg-[#ECFFF8] h-full border-b-2 px-[13px] md:px-[48px]  ${expandedFriendlies[teamSchedule.teamName] ? 'border-[#DFDFDF]' : 'border-primary rounded-b-[10px]'
                        } justify-between cursor-pointer`}
                      onClick={() => toggleFriendlies(teamSchedule.teamName)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                          {teamSchedule.teamInitials}
                        </div>
                        <h2 className="font-semibold text-lg">{teamSchedule.teamName}</h2>
                      </div>
                      <div className='flex relative gap-[16px] justify-center items-center'>
                        <div className='border-l px-[12px] md:px-[8px] h-[70px] py-0 border-[#DFDFDF]'></div>
                        <div className="text-xl w-full absolute left-[25%] md:left-[130%]   ">
                          <p className='flex  items-center justify-center'>{expandedFriendlies[teamSchedule.teamName] ? <DropdownSvg /> : <Dropdown2Svg />}</p>
                        </div>
                      </div>
                    </div>

                    {expandedFriendlies[teamSchedule.teamName] && (
                      <div className='border-b-2 border-b-green-500 '>
                        <div className="flex flex-col">
                          {teamSchedule.matches.map((match, idx) => (
                            <ScheduleMatchCard
                              key={idx}
                              team1={match.teams.team1}
                              team2={match.teams.team2}
                              time={match.time}
                              minute={match.minute}
                              team1score={match.team1score}
                              team2score={match.team2score}
                              joined={false}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}