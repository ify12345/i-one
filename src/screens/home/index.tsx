import TwLayout from '@/components/layouts/Tw'
import { motion } from 'framer-motion'

import * as React from 'react'

const Home = () => {
  return (
    <TwLayout>
      <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}className="flex flex-col mx-auto justify-center items-center gap-3 px-5 pt-[44px] lg:pt-[89px]">
        <motion.p
             initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[#000] text-base lg:text-3xl play-fair font-semibold text-center"
        >
          Simplifying 5-A-Side Football Bookings and Team Management
        </motion.p>
        <motion.p
         initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
         className=" text-primaryLight text-sm lg:text-lg play-fair font-normal text-center">
          Find a game, book a session, join a team, and track your stats with
          Ai-One.
        </motion.p>
      </motion.div>
    </TwLayout>
  )
}

export default Home
