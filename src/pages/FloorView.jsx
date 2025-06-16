import React from 'react'
import FloorList from '../components/FloorList'
import NavComponent from '../components/NavComponent'


const FloorView = () => {


  return (
    <div className='mx-auto w-[90%] z-30'>
      <NavComponent navData={[{ text: 'Home', link: '/' }]} currentPage='Floor' />
      <h1 className='font-bold text-2xl '>Floors</h1>
      <FloorList />
    </div>
  )
}

export default FloorView
