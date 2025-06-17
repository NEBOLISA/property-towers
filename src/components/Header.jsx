import React, { useState } from 'react'
import logo from '../assets/banner.png'

import { Link } from 'react-router-dom'
import { MdOutlineMenu } from 'react-icons/md'
import HeaderNav from './HeaderNav'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [isDropdownHovered, setIsDropdownHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-amber-600 w-full fixed top-0 left-0 right-0 z-50 md:h-[100px] h-max  '>
     
      <div className='md:w-[85%] w-[90%] mx-auto  flex justify-between md:justify-center lg:justify-between items-center h-[100px] md:h-full '>
        <Link to='/' className='cursor-pointer block md:hidden lg:block -pl-9 '>
          <div>
            <img
              src={logo}
              alt='logo'
              className='md:w-[250px] md:h-[250px] w-[200px] h-[200px] overflow-hidden'
            />
          </div>
        </Link>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='flex md:hidden items-center justify-center p-1 cursor-pointer rounded-lg bg-[#333333] '
        >
          {isMenuOpen ? (
            <IoClose className='w-9 h-9 cursor-pointer md:hidden  text-white' />
          ) : (
            <MdOutlineMenu className='w-9 h-9 cursor-pointer md:hidden  text-white' />
          )}
        </div>
        <div
          className={`${
            isMenuOpen
              ? 'translate-y-0   transition-all duration-500 ease-in-out'
              : 'translate-y-[-120%]  transition-all duration-500 ease-in-out'
          } md:hidden  absolute top-[100px] h-max z-50  right-0 left-0 bg-amber-600 w-full  pb-4`}
        >
          <HeaderNav
            isDropdownHovered={isDropdownHovered}
            setIsDropdownHovered={setIsDropdownHovered}
            mobile
          />
        </div>
        <div className='hidden md:block'>
          <HeaderNav
            isDropdownHovered={isDropdownHovered}
            setIsDropdownHovered={setIsDropdownHovered}
          />
        </div>
      </div>
    </div>
  )
}

export const Dropdown = () => {
  return (
    <div className='w-[130px] bg-black/50 h-max absolute top-20  md:top-16 hidden text-white group-hover:block p-2 shadow-lg z-50'>
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
