import React from 'react'

const ServiceCard = ({icon: Icon, title, desc}) => {
  return (
    <div className='w-full bg-neutral-200 hover:bg-neutral-300 rounded-xl p-7 flex items-center justify-center gap-4 flex-col text-center cursor-pointer '>
        <div className="w-full flex items-enter justify-center gap-x-3">
            <div className="w-12 h-12 rounded-xl bg-neutral-400/40 flex items-center justify-center ">
                <Icon className="w-7 h-7 text-neutral-800" />
            </div>
           <div className='flex flex-col'>
                 <h1 className="text-2xl text-neutral-800 font-bold">
                    {title}
                </h1>
                <p>{desc}</p>
           </div>
        </div>
    </div>
  )
}

export default ServiceCard