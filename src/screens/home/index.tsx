import TwLayout from '@/components/layouts/Tw'
import { fadeIn } from '@/components/variants'
import { motion } from 'framer-motion'

import * as React from 'react'

const Home = () => {
  return (
    <TwLayout>
      <div className="flex flex-col mx-auto justify-center items-center gap-3 px-5 pt-[44px] lg:pt-[89px]">
        <motion.p
          variants={fadeIn('down', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="text-[#000] text-base lg:text-3xl play-fair font-semibold text-center"
        >
          Simplifying 5-A-Side Football Bookings and Team Management
        </motion.p>
        <p className=" text-primaryLight text-sm lg:text-lg play-fair font-normal text-center">
          Find a game, book a session, join a team, and track your stats with
          Ai-One.
        </p>
      </div>
    </TwLayout>
  )
}

export default Home
