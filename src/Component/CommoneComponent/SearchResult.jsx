import React from 'react'
import TicketCard from './common/ticket/TicketCard'
import { FaBus} from 'react-icons/fa'
import { IoMdRefresh } from "react-icons/io";

const SearchResult = () => {
  return (
    <div className='w-full col-span-3 space-y-10 pt-11'>

        <div className="space-y-6">
            <TicketCard icon={FaBus} busName={'Sworgadawri Deluxe'} routeFrom={'Kathmandu'} routeTo={'Pyuthan'} arrivalTime={'06:15 PM'} departureTime={'08:45 AM'} price={'1600'} availableSeats={'5'} />
            <TicketCard icon={FaBus} busName={'Sworgadawri Deluxe'} routeFrom={'Kathmandu'} routeTo={'Pyuthan'} arrivalTime={'06:15 PM'} departureTime={'08:45 AM'} price={'1600'} availableSeats={'5'} />
            <TicketCard icon={FaBus} busName={'Sworgadawri Deluxe'} routeFrom={'Kathmandu'} routeTo={'Pyuthan'} arrivalTime={'06:15 PM'} departureTime={'08:45 AM'} price={'1600'} availableSeats={'5'} />
            <TicketCard icon={FaBus} busName={'Sworgadawri Deluxe'} routeFrom={'Kathmandu'} routeTo={'Pyuthan'} arrivalTime={'06:15 PM'} departureTime={'08:45 AM'} price={'1600'} availableSeats={'5'} />
            <TicketCard icon={FaBus} busName={'Sworgadawri Deluxe'} routeFrom={'Kathmandu'} routeTo={'Pyuthan'} arrivalTime={'06:15 PM'} departureTime={'08:45 AM'} price={'1600'} availableSeats={'5'} />
            <TicketCard icon={FaBus} busName={'Sworgadawri Deluxe'} routeFrom={'Kathmandu'} routeTo={'Pyuthan'} arrivalTime={'06:15 PM'} departureTime={'08:45 AM'} price={'1600'} availableSeats={'5'} />
            <TicketCard icon={FaBus} busName={'Sworgadawri Deluxe'} routeFrom={'Kathmandu'} routeTo={'Pyuthan'} arrivalTime={'06:15 PM'} departureTime={'08:45 AM'} price={'1600'} availableSeats={'5'} />
            <TicketCard icon={FaBus} busName={'Sworgadawri Deluxe'} routeFrom={'Kathmandu'} routeTo={'Pyuthan'} arrivalTime={'06:15 PM'} departureTime={'08:45 AM'} price={'1600'} availableSeats={'5'} />
        </div>

        <div className="w-full flex items-center justify-center">
            <button to={'/bus-tickets/detail'} className="w-fit px-4 py-1.5 bg-orange-400 hover:bg-transparent border-2 border-orange-500 rounded-xl text-sm font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-orange-300 ease-in-out duration-300">
              <IoMdRefresh />
              Lode More
            </button>
        </div>

    </div>
  )
}

export default SearchResult