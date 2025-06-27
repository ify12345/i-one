/* eslint-disable @typescript-eslint/no-unused-vars */
import HomeLayout from '@/components/layouts/HomeLayout'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import UpcomingMatch from '@/components/UpcomingMatch'
import MatchDetails from '@/components/MatchDetails'

export default function Lineup() {
    const location = useLocation();
    const T1 = location.state?.t1 ?? false;
    const T2 = location.state?.t2 ?? false;

    return (
        <HomeLayout activeNavId={1}>
            <div className='flex flex-col md:flex-row '>
                <UpcomingMatch team1={T1} team2={T2} />
                
                <MatchDetails />
            </div>
        </HomeLayout>
    )
}
