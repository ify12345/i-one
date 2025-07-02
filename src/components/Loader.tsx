import React from 'react'
import { motion } from 'framer-motion'

interface LoaderProps {
  visible: boolean
}

const Loader = ({ visible }: LoaderProps) => {
  if (!visible) return null
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="flex items-center gap-2 mb-1 justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-bold text-foreground flex justify-center items-center text-center animate-bounce text-white"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            i-<span className="text-primary">o</span>ne
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-muted-foreground mt-1 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
