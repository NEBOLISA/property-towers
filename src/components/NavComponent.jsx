import React from 'react'
import { IoChevronBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
const NavComponent = ({ navData, currentPage }) => {
  const navigate = useNavigate()
  return (
    <nav className='flex items-center gap-2 text-sm text-gray-600 mt-3 mb-4 '>
      {navData.map((data) => (
        <div className='flex items-center gap-2 text-sm text-gray-600 mt-3 mb-4'>
          <button
            onClick={() => navigate(data.link)}
            className='hover:underline cursor-pointer'
          >
            {data.text}
          </button>
          <span>{'>'}</span>
        </div>
      ))}
      <button className='text-gray-800 font-medium cursor-not-allowed'>
        {currentPage}
      </button>{' '}
    </nav>
  )
}

export default NavComponent
