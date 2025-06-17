import React from 'react'
import FloorList from '../components/FloorList'
import NavComponent from '../components/NavComponent'
import { useParams } from 'react-router-dom'


const FloorView = () => {

const { towerId } = useParams()
  const towerNumber = Number(towerId)
  return (
    <div className='mx-auto w-[90%] '>
      <NavComponent
        navData={[
          { text: 'Home', link: '/' },
          { text: `Tower ${towerNumber}`, link:"/" }
        ]}
        currentPage='Floor'
      />
      <h1 className='font-bold text-2xl '>Floors</h1>
      <FloorList />
    </div>
  )
}

export default FloorView
