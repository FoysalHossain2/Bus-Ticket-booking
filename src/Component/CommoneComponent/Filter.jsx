import React from 'react'
import PriceRangeSlider from './priceChange/PriceRangeSlider'

const Filter = ({className}) => {

  const [RangeValues, setRangeValues] = React.useState({
    min: 0,
    max:100
  })

  const handelRangeChange = (values) => {
    setRangeValues({values})
  }


  return (
    <div className={`w-full ${className}`}>
      <h1 className="text-xl text-neutral-700 font-semibold">
        Apply Filters
      </h1>   

      {/* Price filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
        <h1 className="text-lg text-center text-neutral-600 font-medium">
          Apply Filters
        </h1>   
        <PriceRangeSlider 
          min={1000}
          max={3000}
          onChange={handelRangeChange}
        />
      </div>
      

      {/* Bus Types filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
         <h1 className="text-lg text-center text-neutral-600 font-medium">
          Bus Types
        </h1>

        <div className="space-y-2 5">
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="ac" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="ac" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              AC Deluxe <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Tourist" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Tourist" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Tourist AC Deluxe <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Air" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Air" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Air Suspension <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="luxury" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="luxury" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Luxury Air Suspension <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>

        </div>
      </div>

      
      {/* Amenities filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
         <h1 className="text-lg text-center text-neutral-600 font-medium">
          Bus Companies
        </h1>

        <div className="space-y-2 5">
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Sworgadwair" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Sworgadwair" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Sworgadwair Deluxe <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Pokhara" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Pokhara" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Pokhara Deluxe <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Mustang" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Mustang" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Mustang Suspension <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Lumbini" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Lumbini" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Lumbini Suspension <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>

        </div>
      </div>
      
      {/* Amenities filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
         <h1 className="text-lg text-center text-neutral-600 font-medium">
          Bus Amenities
        </h1>

        <div className="space-y-2 5">
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Internet/wifi" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Internet/wifi" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Internet/wifi <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="AC & Air" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="AC & Air" className='text-sm text-neutral-600 font-normal cursor-pointer'>
               AC & Air Suspension <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Water Bottles" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Water Bottles" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Water Bottles <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="LED TV & Music" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="LED TV & Music" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              LED TV & Music <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Charging Port" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Charging Port" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Charging Port <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id="Fan" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor="Fan" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Fan <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>
          
          <div className='w-full items-center gap-2'>
            <input 
              type="checkbox" 
              name="" 
              id=" Super AC" 
              className='h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer'
            />
            <label htmlFor=" Super AC" className='text-sm text-neutral-600 font-normal cursor-pointer'>
              Super AC <span className='text-xs text-neutral-600'>(10)</span>
            </label>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Filter