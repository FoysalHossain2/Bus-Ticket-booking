import React from 'react'
import RootLayouts from '../CommoneComponent/layout/RootLayouts'
import TopSearchCard from '../CommoneComponent/TopSearchCard'

const TopSearch = () => {
  return (
    <RootLayouts className="space-y-12 py-20">

        {/* Tag */}
        <div className='w-full flex items-center justify-center text-center'>
            <h1 className="text-3xl text-neutral-800 font-bold">
                Top Search <span className='text-orange-300'>Route</span>
            </h1>
        </div>

        {/* Top Search tickets routes card */}
        <div className="w-full grid grid-cols-3 gap-5">
            <TopSearchCard routerFrom={"Kathmandu"} routeTo={"Pyuthan"} timeDuration={"8 Hrs"} price={"400"} />
            <TopSearchCard routerFrom={"Kathmandu"} routeTo={"Pyuthan"} timeDuration={"8 Hrs"} price={"400"} />
            <TopSearchCard routerFrom={"Kathmandu"} routeTo={"Pyuthan"} timeDuration={"8 Hrs"} price={"400"} />
            <TopSearchCard routerFrom={"Kathmandu"} routeTo={"Pyuthan"} timeDuration={"8 Hrs"} price={"400"} />
            <TopSearchCard routerFrom={"Kathmandu"} routeTo={"Pyuthan"} timeDuration={"8 Hrs"} price={"400"} />
            <TopSearchCard routerFrom={"Kathmandu"} routeTo={"Pyuthan"} timeDuration={"8 Hrs"} price={"400"} />
        </div>


    </RootLayouts>
  )
}

export default TopSearch