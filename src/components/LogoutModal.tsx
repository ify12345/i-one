/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { showToast } from './Toast'
import { persistor, useAppDispatch } from '@/redux/store'
import { logOut } from '@/api/auth'
import { logout } from '@/redux/reducers/auth'
import Loader from './Loader'


interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const LogoutModal = ({ isOpen, onClose }: ContactModalProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(logout())
    logout()
    dispatch(logOut())
      .unwrap()
      .then(response => {
        showToast({
          type: 'success',
          msg: response.message || 'Logout successful',
        })
        persistor.purge();
       
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
        const errorMessage = err?.msg.message || err?.response?.data?.detail
        showToast({ type: 'error', msg: errorMessage })
      })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      Log out?
                    </h2>
                    <p className="text-muted-foreground">
                      Are you sure you want to log out??
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <MdOutlineClose
                      size={32}
                      className="hover:scale-95 transition-all duration-500"
                    />
                  </button>
                </div>
                <div className="flex w-full justify-between">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-primary text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-danger text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <Loader visible={loading} />
        </>
      )}
    </AnimatePresence>
  )
}

export default LogoutModal
