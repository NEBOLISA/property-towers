import React, { useState } from 'react'
import { data } from '../data/data'
import { useParams } from 'react-router-dom'

const LayoutDetail = () => {
    const { towerId, floorId } = useParams()
    const [selectedApartment, setSelectedApartment] = useState(null)
    const apartmentData = data.towers.find((tower) => tower.id === Number(towerId)).floors[floorId].apartments
    console.log(apartmentData)
    const numberOfApartment = apartmentData.length
    console.log({numberOfApartment})
  return (
    <div className='flex justify-between gap-8'>
      <div className='border-[2px] flex items-center justify-center flex-col border-gray-300 h-full w-full rounded-lg p-5'>
        <div className='w-[450px] h-[450px]'>
          <img
            src={selectedApartment?.image || apartmentData[0].image}
            className='w-full h-full object-contain'
            alt=''
          />
        </div>
        <div
          className={`grid  gap-4 mt-5 ${
            numberOfApartment === 2 ? 'grid-rows-3' : 'grid-rows-3'
          }`}
        >
          {apartmentData.map((data) => (
            <img
              src={data.image}
              className='w-[150px] h-[150px] object-fill cursor-pointer'
              alt=''
              onClick={() => setSelectedApartment(data)}
            />
          ))}
        </div>
      </div>
      <div className='border-[4px] border-gray-300 h-full w-full rounded-lg'></div>
    </div>
  )
}

export default LayoutDetail
