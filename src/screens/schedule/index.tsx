import HomeLayout from '@/components/layouts/HomeLayout'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Schedule() {
  return (
    <HomeLayout>
      <div className='my-5'>Schedule</div>
      <Link className='bg-primary text-[#fff] rounded-md p-2' to="/schedule-detail">Go to details </Link>
    </HomeLayout>
  )
}
