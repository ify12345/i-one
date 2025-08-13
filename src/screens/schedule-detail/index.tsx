import CustomInput from '@/components/CustomInput'
import HomeLayout from '@/components/layouts/HomeLayout'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ScheduleDetail() {
  return (
    <HomeLayout activeNavId={2}>
      <div className="flex flex-col lg:flex-row gap-[54px] lg:px-[80px] w-full">
        <div className="lg:w-6/12 lg:max-w-full md:max-w-[500px] mx-auto h-full w-full">
          <div className="w-full bg-white flex flex-col gap-[32px] border-[1px] p-[40px] min-h-[256px] rounded-[20px] shadow-md border-[#00E0821A]">
            <h1 className='text-[32px] font-[600]'>New Session</h1>
            <div className='w-full flex flex-col p-[20px] items-center justify-center gap-[12px] bg-[#CFFCE9] rounded-[10px] min-h-[108px]'>
              <h1 className='text-[#0C4D2E] xl:leading-[100%] text-center text-[16px] font-[600]'>
                You are officially the captain of this ball session!
              </h1>
              <p className='text-center px-[40px] leading-[25px] font-[400] text-[#0C4D2E] text-[14px]'>
                You have [timer] before your Session is cancelled Team Names Will Be Assigned Randomly
              </p>
            </div>
          </div>
        </div>

        <div className='lg:w-6/12 md:max-w-[500px] mx-auto flex flex-col gap-[28px] h-full w-full'>
          <div className='flex md:flex-row flex-col w-full gap-[28px] lg:gap-[7.5px] justify-between'>
            <CustomInput
              label="Location"
              name="Location"
              type="text"
              placeholder='Location'
            />
            <CustomInput
              label="Time"
              name="Time"
              type="text"
              placeholder='Time'
            />
            <CustomInput
              label="Date"
              name="Date"
              type="text"
              placeholder='Date'
            />
          </div>
          <div>
              <CustomInput
                    label="Total Minutes per Match"
                    name="Total Minutes per Match"
                    type="select"
                   className='text-[#5C5C5C80]'
                    options={[
                      { label: '1', value: '1' },
                      { label: '2', value: '2' },
                      { label: '3', value: '3' },
                      { label: '4', value: '4' },
                      { label: '5', value: '5' },
                      { label: '6', value: '6' },
                      { label: '7', value: '7' },
                      { label: '8', value: '8' },
                    ]}
                    placeholder="Total Minutes per Match"
                  
                  />
          </div>
          <div>
              <CustomInput
                    label="Numbers of Players per Team"
                    name="Numbers of Players per Team"
                    type="select"
                   className='text-[#5C5C5C80]'
                    options={[
                    { label: '1', value: '1' },
                      { label: '2', value: '2' },
                      { label: '3', value: '3' },
                      { label: '4', value: '4' },
                      { label: '5', value: '5' },
                      { label: '6', value: '6' },
                      { label: '7', value: '7' },
                      { label: '8', value: '8' },
                    ]}
                    placeholder="Numbers of Players per Team"
                  
                  />
          </div>
          <div>
              <CustomInput
                    label="Number of Sets"
                    name="Number of Sets"
                    type="select"
                   className='text-[#5C5C5C80]'
                    options={[
                    { label: '1', value: '1' },
                      { label: '2', value: '2' },
                      { label: '3', value: '3' },
                      { label: '4', value: '4' },
                      { label: '5', value: '5' },
                      { label: '6', value: '6' },
                      { label: '7', value: '7' },
                      { label: '8', value: '8' },
                    ]}
                    placeholder="Number of Sets"
                  
                  />
          </div>
          <div className='flex flex-col gap-[12px]'>
            <h1 className='font-[500] text-[#434343] text-[14px]'>Conditions</h1>
            <h1 className='font-[400] text-[#434343] text-[18px]'>Winning Decider</h1>
          <div className='flex gap-4'>
         <div className="inline-flex items-center">
  <label className="relative flex items-center cursor-pointer">
    <input 
      type="checkbox" 
      className="
        appearance-none
        w-[29px] h-[29px]
        border-[1px] border-[#EFEFEF]
        rounded-md
        checked:bg-[#00FF94]
        checked:border-[#00FF94]
        relative
        cursor-pointer
        shadow-md
        checked:after:content-['']
        checked:after:block
        checked:after:w-2
        checked:after:h-3
        checked:after:border-white
        checked:after:border-r-2
        checked:after:border-b-2
        checked:after:rotate-45
        checked:after:absolute
        checked:after:top-1.5
        checked:after:left-2.5
      "
    />
    <span className="ml-2 text-[#434343] text-[14px]">AET</span>
  </label>
</div>
         <div className="inline-flex items-center">
          
  <label htmlFor="pk-shootout" className="relative flex items-center cursor-pointer">
    <input 
      type="checkbox" 
      id='pk-shootout'
      name='pk-shootout'
      className="
        appearance-none
        w-[29px] h-[29px]
        border-[1px] border-[#EFEFEF]
        rounded-md
        checked:bg-[#00FF94]
        checked:border-[#00FF94]
        relative
        cursor-pointer
        shadow-md
        checked:after:content-['']
        checked:after:block
        checked:after:w-2
        checked:after:h-3
        checked:after:border-white
        checked:after:border-r-2
        checked:after:border-b-2
        checked:after:rotate-45
        checked:after:absolute
        checked:after:top-1.5
        checked:after:left-2.5
      "
    />
    <span className="ml-2 text-[#434343] text-[14px]">Penalty Shootout</span>
  </label>
</div>

         </div>
         </div>
         <Link className='w-full text-[16px] rounded-[5px] font-[400] flex items-center justify-center bg-[#00FF94] h-[50px]' to='/'>Create Session</Link>
        </div>
      </div>
    </HomeLayout>
  )
}