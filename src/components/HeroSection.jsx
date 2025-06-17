import React, { useEffect, useState } from 'react'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import InputComponent from './InputComponent'
import Button from './Button'

const HeroSection = () => {
    const images = [slide1, slide2, slide3];
    const [index, setIndex] = useState(0);
    useEffect(() => { 
        setInterval(() => {
       setIndex((prev)=> (prev +1)% images.length)
        }, 6000)
        return () => {
            clearInterval();
        }
    }, [])
    const goToNextSlide = () => {
         setIndex((prev)=> (prev +1)% images.length)   
    }
    const goToPrevSlide = () => {
      setIndex((prev)=> (prev -1 + images.length)% images.length)  
    }
    return (
      <div className='w-full h-[600px] overflow-hidden group relative  '>
        <div className='group-hover:flex justify-between w-full hidden  top-1/2 -translate-y-1/2 my-auto  absolute'>
          <div
            className='p-3 flex items-center justify-center ml-2 cursor-pointer bg-white'
            onClick={goToPrevSlide}
          >
            <FaAngleLeft />
          </div>
          <div
            className='p-3 flex mr-2 items-center justify-center cursor-pointer bg-white'
            onClick={goToNextSlide}
          >
            <FaAngleRight className='text-black' />
          </div>
        </div>
        <div className=' '>
          {images.map((image, i) => (
            <img
              src={image}
              key={i}
              className={`w-full h-full  transition-opacity duration-500 ease-in-out absolute inset-0 object-cover ${
                i === index ? 'opacity-100' : 'opacity-0'
              } `}
              alt=''
            />
          ))}
        </div>
        <div className='w-full h-1/5 bg-black/80 absolute bottom-0'>
          <div className='w-[90%] gap-2 h-full flex  md:flex-row flex-col items-center justify-center mx-auto lg:gap-4'>
            <InputComponent placeholder='City' type='text' mobile/>
            <InputComponent
              placeholder='From'
             
              type='number'
              leftIconPresent

            />
            <InputComponent
              placeholder='To'
             
              type='number'
              leftIconPresent
            />
            <Button text='Search' />
          </div>
        </div>
      </div>
    )
}

export default HeroSection
