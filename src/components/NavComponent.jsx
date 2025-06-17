import React from 'react'
import { useNavigate } from 'react-router-dom'
const NavComponent = ({ navData, currentPage }) => {
  const navigate = useNavigate()
  return (
    <nav className='flex items-center gap-2 text-sm text-gray-600 mt-3 mb-4 w-full'>
      {navData.map((data, index) => (
        <div
          key={index}
          className='flex md:text-sm text-[8px] justify-betweens md:justify-center items-center gap-2 text-sm text-gray-600 mt-3 mb-4'
        >
          <button
            onClick={() => data.link && navigate(data.link)}
            className={` ${
              data.link
                ? 'hover:underline cursor-pointer'
                : 'cursor-not-allowed'
            }`}
          >
            {data.text}
          </button>
          <span>{'>'}</span>
        </div>
      ))}
      <button className='text-gray-800 md:text-sm text-[10px] font-medium cursor-not-allowed'>
        {currentPage}
      </button>{' '}
    </nav>
  )
}

export default NavComponent
