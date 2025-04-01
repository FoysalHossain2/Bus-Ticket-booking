import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6';

const WarningAlert = ({message}) => {

    const [IsVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false);
    }

  return (
    <div className=' flex items-center justify-between p-4 text-yellow-600 bg-yellow-100 rounded-xl' role='alert'>
        <span>{message}</span>

        <button 
            onClick={handleClose}
            className="ml-4 text-red-700 hover:text-red-400"
            type='button'
            aria-label='Close'
        >
            <FaX className='w-3 h-3' />
        </button>
    </div>
  )
}

export default WarningAlert