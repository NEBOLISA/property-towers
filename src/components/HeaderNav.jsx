import React from 'react'
import { FaSortDown, FaSortUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Dropdown } from './Header'

const HeaderNav = ({setIsDropdownHovered,isDropdownHovered}) => {
  return (
    <div className={`  `}>
      <ul className={`flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 text-white text-[16px] `}>
        <li className='cursor-pointer hover:text-black transition-all duration-300'>
          <Link to={'/'}>HOME</Link>
        </li>
        <li className='cursor-pointer hover:text-black transition-all duration-300'>
          ABOUT
        </li>
        <li className='cursor-pointer hover:text-black transition-all duration-300'>
          SERVICES
        </li>
        <li className='cursor-pointer hover:text-black transition-all duration-300'>
          PRICE
        </li>
        <li className='cursor-pointer hover:text-black transition-all duration-300'>
          <div
            className='group relative flex items-center '
            onMouseEnter={() => {
              setIsDropdownHovered(true)
            }}
            onMouseLeave={() => {
              setIsDropdownHovered(false)
            }}
          >
            <span className='text-white transition-all duration-300  group:cursor-pointer group-hover:text-black'>
              PROJECTS
            </span>

            <div className='self-baseline '>
              {isDropdownHovered ? (
                <FaSortDown
                  className={`text-white inline-block ml-[4px] transition-all duration-300 w-3 h-3 mb-1 group:cursor-pointer group-hover:text-black `}
                />
              ) : (
                <FaSortUp
                  className={`text-white inline-block ml-[4px] transition-all duration-300 w-3 h-3 mb-1 group:cursor-pointer group-hover:text-black `}
                />
              )}
            </div>

            <Dropdown />
          </div>
        </li>
        <li className='cursor-pointer hover:text-black transition-all duration-300'>
          CONTACT
        </li>
      </ul>
    </div>
  )
}

export default HeaderNav
