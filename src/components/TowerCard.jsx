import React from 'react'
import { Link } from 'react-router-dom'

const TowerCard = ({ image, description, title,id }) => {
  // const url = title.split(" ").join("-").toLowerCase()
  return (
    <div className='w-[400px] h-[600px] flex flex-col mt-4  '>
      <div className='w-full h-2/5 relative group '>
        <img className='w-full h-full object-cover overflow-hidden' src={image} />

        <div
          class='absolute inset-0  opacity-0 group-hover:opacity-100 group-hover:h-[100%] bg-amber-600/80 text-black p-4 flex items-center justify-center
           transform translate-y-[75%]  group-hover:translate-y-0 
           transition-all duration-500 ease-in-out'
        >
          <Link to={`/tower/${id}`} >
            <button class='cursor-pointer hidden group-hover:block text-white bg-transparent border-white border-2 p-4 font-bold text-sm'>
            Click To View Details
          </button>
            </Link>
        </div>
      </div>

      <div className='bg-[#ececec] p-2 border-t-amber-600 border-t-8 z-30 '>
        <h1 className='font-bold text-lg mt-2'>{title}</h1>
        <p className='line-clamp-5'>{description}</p>
      </div>
    </div>
  )
}

export default TowerCard
