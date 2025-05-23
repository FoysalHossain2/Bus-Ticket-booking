import React from 'react'
import {motion} from 'framer-motion'
import TopLayout from '../Component/CommoneComponent/layout/TopLayout'
import RootLayouts from '../Component/CommoneComponent/layout/RootLayouts'
import Search from '../Component/CommoneComponent/Search'
import Filter from '../Component/CommoneComponent/Filter'
import SearchResult from '../Component/CommoneComponent/SearchResult'

const Tickets = () => {
  return (
     <div className='w-full space-y-12 pb-16'>
        {/* Top Layout */}
        <TopLayout 
            bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"} 
            title={"Reserve your ticket"}
        />

        <RootLayouts className={'space-y-12 relative'}>
          {/* search section */}
          <div className="space-y-5 w-full bg-neutral-50 flex items-center justify-center flex-col sticky top-0 z-30">
          <motion.div
                initial={{opacity: 0, y: -800}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -800}}
                transition={{duration: 1.35, ease: "easeOut"}}
                className='text-3xl text-neutral-700 font-semibold'
            >
             Want to change the route?
            </motion.div>
          </div>

          {/* Search Option */}
            <Search />

          {/* Searched bus tickets */}
          <div className="w-full h-auto grid grid-cols-4 gap-16 relative">

            {/* Filter Section */}
            <div className="col-span-1">
              <Filter className="space-y-4 sticky top-52 z-20" />
            </div>


            {/* Search Ticket */}
            <SearchResult />

          </div>

        </RootLayouts>

    </div>
  )
}

export default Tickets