import React, { useState } from 'react'
import logo from '../assets/banner.png'
import { FaSortDown, FaSortUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isDropdownHovered, setIsDropdownHovered] = useState(false)
  return (
    <div className='bg-amber-600 w-full h-[100px]  relative overflow-hidden'>
      <div className='w-[85%] mx-auto flex justify-between items-center h-full '>
        <Link to='/' className='cursor-pointer  '>
          <div>
            <img src={logo} alt='logo' className='w-[250px] h-[250px] overflow-hidden' />
          </div>
        </Link>
        <div>
          <ul className='flex justify-between items-center gap-7 text-white text-[16px] '>
            <li className='cursor-pointer hover:text-black transition-all duration-300'>
              <Link to={"/"}>HOME</Link>
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
      </div>
    </div>
  )
}

const Dropdown = () => {
  return (
    <div className='w-[130px] bg-black/50 h-max absolute top-6 hidden text-white group-hover:block p-2 shadow-lg'>
      <ul>
        <li>Option1</li>
        <li>Option2</li>
        <li>Option3</li>
        <li>Option4</li>
      </ul>
    </div>
  )
}

export default Header
