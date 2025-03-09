import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {

    const [ScrollPosition, setScrollPosition] = useState(0)
    const [IsVisible, setIsVisible] = useState(true)
    const [Open, setOpen] = useState(false)

    const navLinks = [
        { link: "/", label: "Home" , id: 1},
        { link: "/about", label: "About", id: 2 },
        { link: "/bus_tickets", label: "Tickets", id: 3 },
        { link: "/services", label: "Services", id: 4 },
    ]

    const handleOpen = () => {
        setOpen(!Open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    // To make the navbar sticky  and the hide when scrolling up
    useEffect(() => {
        const handleScroll = () => {

            const currentScrollState = window.scrollY;
      
            if (currentScrollState > ScrollPosition && currentScrollState > 50) {
              setIsVisible(false); //hide the navbar scrolling down 
            } else {
              setIsVisible(true); // show  the navbar scrolling up 
            }
      
            setScrollPosition(currentScrollState)
        };

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
   
    }, [ScrollPosition, ])
    


  return (
    <nav 
    className={`z-50 w-full h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300
        ${IsVisible ? "translate-y-0" : "-translate-y-full"}
        ${ScrollPosition > 50 ? "backdrop:blur-lg" : "bg-neutral-100/10"}`}
      >
        <div className="w-full h-full flex items-center justify-between">
            {/* Logo section */}
            <Link to={"/"} className='mr-16'>
            Busfdvasd
             {/* <img src={Logo} alt="logo" className="w-28 h-auto object-contain" /> */}
            </Link>

            {/* humber icon */}
            <div onClick={handleOpen}  className='w-fit md:hidden flex items-center justify-center cursor-pointer flex-col gap-1 text-neutral-700'>
               {
                Open
                 ?
                <FaX onClick={handleClose} />
                :
                <FaBars  />
               }
            </div>

            {/* navbar link */}
            <div className={`${Open ? "flex absolute top-20 left-0 w-full h-auto md:relative" : "hidden"} flex-1 md:flex flex-col md:flex-row md:gap-14 gap-8 md:items-center items-start md:p-4 p-4 justify-end md:bg-transparent bg-neutral-200 md:shadow-none sm:shadow-md shadow-md rounded-xl`}>
                <ul className='list-none flex md:items-center items-start flex-wrap md:flex-row flex-col md:gap-8 gap-4 text-lg text-neutral-700 font-normal'>
                   {
                    navLinks.map((navItem) => (
                        <li key={navItem.id}>
                        <Link to={navItem.link}>
                            {navItem.label}
                        </Link>
                    </li>
                    ))
                   }
                </ul>
                {/* button */}
                <div className=' flex items-center justify-center'>
                    <button className="md:w-full md:px-4 px-6 md:py-1 py-2.5 bg-green-400 md:rounded-full border-green-400 hover:border-green-300 rounded-xl text-base text-neutral-50 ease-in-out duration-300">
                        Sing in
                    </button>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar