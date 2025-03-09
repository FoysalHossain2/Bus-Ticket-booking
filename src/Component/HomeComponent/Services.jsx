import React from 'react'
import RootLayouts from '../CommoneComponent/layout/RootLayouts'
import ServiceCard from '../CommoneComponent/ServiceCard'
import { RiRefundLine, RiSecurePaymentLine } from "react-icons/ri";
import { PiHeadsetFill } from "react-icons/pi";

const Services = () => {
  return (
    <RootLayouts className="space-y-12  py-20">
        <div className='w-full flex items-center justify-center text-center'>
            <h1 className="text-3xl text-neutral-800 font-bold">
                Our <span className='text-orange-300'>Services</span>
            </h1>
        </div>

        {/* service Card */}
        <div className='w-full grid grid-cols-3 gap-10'> 
            <ServiceCard icon={RiSecurePaymentLine} title={"Secure Payment"} desc={"Integrate  secure payment for users to pay for their tickets "} />
            <ServiceCard icon={RiRefundLine} title={"Refund Policy"} desc={"Offer options for users to purchase refundable tickets with clear terms "} />
            <ServiceCard icon={PiHeadsetFill} title={"24/7 hour support"} desc={"Get assistance anytime through chat, email, or phone"} />
        </div>
    </RootLayouts>
  )
}

export default Services