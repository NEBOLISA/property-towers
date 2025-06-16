import React from 'react'
import NavComponent from '../components/NavComponent'
import LayoutDetail from '../components/LayoutDetail'
import { useParams } from 'react-router-dom'

const LayoutView = () => {
  const { floorId } = useParams()
  const floorNumber = Number(floorId)
  return (
    <div className='mx-auto w-[90%]'>
      <NavComponent
        navData={[
          { text: 'Home', link: '/' },
          { text: `Floor ${floorNumber}`, link: -1 }
        ]}
        currentPage='Apartments'
      />
      <LayoutDetail/>
    </div>
  )
}

export default LayoutView
