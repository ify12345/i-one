import TwLayout from '@/components/layouts/Tw'
import { fadeIn } from '@/components/variants';
import { motion } from 'framer-motion'

import * as React from 'react'

const Services = () => {
  return (
    <TwLayout>
      <div className="flex flex-col mx-auto justify-center items-center gap-3 px-5 pt-[44px] lg:pt-[89px] play-fair ">
        <p className="text-[#000] text-base lg:text-3xl play-fair font-semibold text-center">
          Take charge of the Pitch!
        </p>
        <p className=" text-primaryLight text-sm lg:text-lg play-fair font-normal text-center">
          Host games, authorize sessions, and track stats with Ai-One.
        </p>
      </div>
    </TwLayout>
  )
}

export default Services
