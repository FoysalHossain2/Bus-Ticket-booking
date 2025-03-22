import React from 'react'
import RootLayouts from '../../../layout/RootLayouts'

const Details = () => {
  return (
    <div>
        <div className='w-full space-y-12 pb-16'>
            {/* Top Layout */}
            <TopLayout 
                bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"} 
                title={"Bus Details"}
            />

            <RootLayouts className={'space-y-12 w-full pb-16'}>

            </RootLayouts>
      </div>
    </div>
  )
}

export default Details