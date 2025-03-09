import React from 'react'
import RootLayouts from '../CommoneComponent/layout/RootLayouts'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import creditcard from '../../assets/creditcard.png'
import mastercard from '../../assets/mastercard.png'
import paypal from '../../assets/paypal.png'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-neutral-950 py-12'>
        <RootLayouts className={"space-y-10"}>

            {/* Footer other content */}
            <div className="w-full grid grid-cols-5 gap-8">
                <div className="col-span-2 space-y-8 md:pr-10 pr-0">
                    <div className="space-y-3">
                        {/* logo */}
                        <Link to='/' className="text-4xl text-orange-400 font-bold">
                            Bus
                        </Link>

                        {/* some description */}
                        <p className='text-sm text-neutral-500 font-normal'>
                            Bus is all about booking ticket through nline platform to make comfortable to the passenger.  
                        </p>
                    </div>

                    {/* social links */}
                    <div className='w-full flex items-center gap-x-5'>
                        <div className="w-10 h-10 rounded-xl bg-neutral-800/40 flex items-center justify-center cursor-pointer">
                            <FaInstagram className='w-5 h-5 text-neutral-500' />
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-neutral-800/40 flex items-center justify-center cursor-pointer">
                            <FaFacebook className='w-5 h-5 text-neutral-500' />
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-neutral-800/40 flex items-center justify-center cursor-pointer">
                            <FaTwitter className='w-5 h-5 text-neutral-500' />
                        </div>

                    </div>
                </div>

                <div className="col-span-1 space-y-5">
                    <h1 className='text-lg text-neutral-100 font-semibold'>
                        Quick Links
                    </h1>
                    <div className="space-y-2">
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            About Us
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            My Account
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Reserve your ticket
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Create your account
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 space-y-5">
                    <h1 className='text-lg text-neutral-100 font-semibold'>
                        To Reserve Routes
                    </h1>
                    <div className="space-y-2">
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Dhaka - Cox'bazer
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Dhaka - Mymonsing
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Dhaka - Khulna
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Dhaka - Rishie
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 space-y-5">
                    <h1 className='text-lg text-neutral-100 font-semibold'>
                        Support Links
                    </h1>
                    <div className="space-y-2">
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Privacy Policy
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Terms & Conditions
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            Help & Support Center
                        </Link>
                        <Link to={'/about'} className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out stroke-neutral-300'>
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>

            {/* separator */}
            <div className="w-full h-px bg-neutral-800/50"></div>

            {/* Copyright */}
            <div className="w-full flex items-center justify-between">
                <p className='text-sm text-neutral-600 font-normal'>
                    Copyright &cory; 2025 All right reserved.
                </p>

                <div className=' flex items-center gap-x-1'>
                    <div className="">
                        <img src={creditcard} alt="" className="w-fit h-9 object-contain" />
                    </div>
                    <div className="">
                        <img src={mastercard} alt="" className="w-fit h-9 object-contain" />
                    </div>
                    <div className="">
                        <img src={paypal} alt="" className="w-fit h-9 object-contain" />
                    </div>
                    <div className="">
                        <img src="https://freelogopng.com/images/all_img/1656234782bkash-app-logo.png" alt="" className="w-fit h-9 object-contain" />
                    </div>
                </div>
            </div>
        </RootLayouts>
    </div>
  )
}

export default Footer