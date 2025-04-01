import React from 'react'
import RootLayouts from '../../../layout/RootLayouts'
import { Link } from 'react-router-dom'
import WarningAlert from '../../../alertmessage/WarningAlert'
import TopLayout from '../../../layout/TopLayout'

const Details = () => {

  // show the waring message box
  const message = (
    <>
      One individual only can book 10 seats. If you want to book more 10 seats,
      please <Link to={'/support-team'} className='text-red-600 font-medium'>Contact our support team.</Link>
    </>
  )

  return (
    <div>
        <div className='w-full space-y-12 pb-16'>
            {/* Top Layout */}
            <TopLayout 
                bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"} 
                title={"Bus Details"}
            />

            <RootLayouts className={'space-y-12 w-full pb-16'}>

              {/* seat layout and selection action detail*/}
              <div className="w-full space-y-8">

                {/* Warning Message */}
                <WarningAlert message={message} />

                {/* Seat Layout */}
              </div>

              {/* Bus Detail */}
              <div className="w-full flex items-center justify-center flex-col gap-8 text-center"></div>

            </RootLayouts>
      </div>
    </div>
  )
}

export default Details