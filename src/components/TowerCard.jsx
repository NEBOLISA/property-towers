import React from 'react'
import { Link } from 'react-router-dom'

const TowerCard = ({ image, description, title,id }) => {
  // const url = title.split(" ").join("-").toLowerCase()
  return (
    <div className='lg:w-[400px] h-max flex flex-col mt-4  '>
      <div className='w-full h-2/5 relative group '>
        <img className='w-full h-full object-cover overflow-hidden' src={image} />

        <div
          class='absolute inset-0  lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:h-[100%] lg:bg-amber-600/80 bg-amber-500/30 text-black p-4 flex items-center justify-center
           transform lg:translate-y-[75%]  lg:group-hover:translate-y-0 
           transition-all duration-500 ease-in-out'
        >
          <Link to={`/tower/${id}`} >
            <button class='cursor-pointer lg:hidden group-hover:block text-white bg-transparent border-white border-2 p-4 font-bold text-sm'>
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
