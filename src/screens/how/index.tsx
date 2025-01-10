import TwLayout from '@/components/layouts/Tw'


import * as React from 'react'

const How = () => {
  return (
    <TwLayout>
      <div className="flex flex-col mx-auto justify-center items-center gap-3 px-5 pt-[44px] lg:pt-[89px] play-fair ">
        <p className="text-[#000] text-base lg:text-3xl play-fair font-semibold text-center">
          Spend Less Time Being Indecisive
        </p>
        <p className=" text-primaryLight text-sm lg:text-lg play-fair font-normal text-center">
          Find a game, book a session, join a team, and track your stats with
          Ai-One.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-[132px] mt-10">
          <div className="flex flex-col gap-5  items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25 0L50 25L25 50L0 25L25 0Z" fill="#FFBD69" />
            </svg>
            <p className="text-[15px] font-light text-primaryLight">
              Create An Account
            </p>
          </div>
          <div className="flex flex-col gap-5  items-center">
            <svg
              width="48"
              height="46"
              viewBox="0 0 48 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0L47.7764 17.2746L38.6946 45.2254H9.30537L0.223587 17.2746L24 0Z"
                fill="#00FF94"
              />
            </svg>

            <p className="text-[15px] font-light text-primaryLight">
              Secure A Game Slot
            </p>
          </div>
          <div className="flex flex-col gap-5  items-center">
            <svg
              width="44"
              height="50"
              viewBox="0 0 44 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 0L43.6506 12.5V37.5L22 50L0.349365 37.5V12.5L22 0Z"
                fill="#63CBF4"
              />
            </svg>

            <p className="text-[15px] font-light text-primaryLight">
              Track Your After Match Stats
            </p>
          </div>
        </div>
      </div>
    </TwLayout>
  )
}

export default How
