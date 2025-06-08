import HomeLayout from '@/components/layouts/HomeLayout';
import React from 'react';
import TrophySvg from '@/assets/svg/TrophySvg';

import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function ProfileStats() {
  return (
    <HomeLayout activeNavId={4}>
      <div className="flex flex-col md:flex-row  gap-14">
        <div className="bg-white rounded-lg shadow-md  sm:p-8 flex flex-col  max-w-[614px] w-full mx-auto overflow-hidden">

          <div className="flex mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Stats</h2>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 ">
            <TrophySvg />
            <TrophySvg />
            <TrophySvg />
            <TrophySvg />
          </div>
        </div>
        <div className="flex flex-col gap-7 text-sm sm:text-base max-w-[593px] w-full mx-auto">
          <div className="flex justify-between gap-4">
            <span className="text-black font-bold text-2xl ">Statistics</span>
            <select className="text-black text-xl font-semibold">
              <option>23/24</option>
              <option>22/23</option>
              <option>21/22</option>
              <option>20/21</option>
            </select>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-600">Goals</span>
            <span className="text-black font-semibold">10</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-600">Assists</span>
            <span className="text-black font-semibold">8</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-600">Total Matches Played</span>
            <span className="text-black font-semibold">15</span>
          </div>

        </div>
      </div>
    </HomeLayout>
  );
}