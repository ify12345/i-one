/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import authImg from '@/assets/images/auth.png'
import Footer from '../Footer'

interface AuthLayoutProps {
  children?: React.ReactNode
}
const navigation = [
  { name: 'Home', id: 1 },
  { name: 'Schedule', id: 2 },
  { name: 'Tournament', id: 3 },
]

const HomeLayout: React.FC<AuthLayoutProps> = () => {
  return (
    <div className="overflow-x-hidden w-full m-0">
      <div className="flex justify-between">
        ione
        {navigation.map((item, id) => {
          return (
            <button className="font-bold" key={id}>
              {item.name}
            </button>
          )
        })}
      </div>
      {/* <div className="">{getActiveScreen()}</div> */}
      <Footer />
      {/* <Polygon initials="IN" team="Team 1"/> */}
    </div>
  )
}

export default HomeLayout
