import React, { useState } from 'react'
import { data } from '../data/data'
import { useParams } from 'react-router-dom'

const LayoutDetail = () => {
    const { towerId, floorId } = useParams()
    
  const apartmentData = data.towers.find((tower) => tower.id === Number(towerId)).floors[floorId - 1].apartments
  const [selectedApartment, setSelectedApartment] = useState(apartmentData[0])
  const [mouseEnterId, setMouseEnterId] = useState(null)
    const numberOfApartment = apartmentData.length
 
  return (
    <div className='lg:flex grid grid-cols-1 justify-between gap-8 '>
      <div className='border-[2px] flex overflow-hidden items-center justify-center  flex-col border-gray-300 h-full w-full rounded-lg p-5'>
        <div className='w-full lg:h-[450px]'>
          <img
            src={selectedApartment?.image || apartmentData[0].image}
            className='w-full h-full object-contain'
            alt=''
          />
        </div>
        <div className='overflow-scroll lg:overflow-visible w-full lg:w-max '>
          <div
            className={`grid  gap-4 mt-5 group relative     ${
              numberOfApartment === 1
                ? 'grid-cols-1'
                : numberOfApartment === 2
                ? 'grid-cols-2'
                : 'grid-cols-3 w-[500px] lg:w-fit'
            }`}
          >
            {apartmentData.map((data) => (
              <div className='relative ' key={data.id}>
                <div
                  onClick={() => setSelectedApartment(data)}
                  onMouseEnter={() => {
                    setMouseEnterId(data.id)
                  }}
                  onMouseLeave={() => {
                    setMouseEnterId(null)
                  }}
                  className={`${
                    mouseEnterId === data.id
                      ? 'opacity-100 z-30 scale-110 transition-all duration-700 ease-in-out rounded-lg'
                      : 'opacity-0 z-0 scale-100 transition-all duration-700 ease-in-out '
                  } inset-0 absolute w-full h-full bg-black/50 cursor-pointer`}
                ></div>
                <img
                  onMouseEnter={() => {
                    setMouseEnterId(data.id)
                  }}
                  onMouseLeave={() => {
                    setMouseEnterId(null)
                  }}
                  src={data.image}
                  className={`${
                    mouseEnterId === data.id
                      ? ' scale-110 transition-all duration-700 ease-in-out '
                      : 'scale-100 transition-all duration-700 ease-in-out'
                  } lg:w-[150px] lg:h-[150px] w-full h-[100px] z-20 object-fill cursor-pointer rounded-lg `}
                  alt=''
                  onClick={() => setSelectedApartment(data)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='border-[2px] border-gray-300 h-full w-full rounded-lg p-4'>
        <div className='w-full h-full '>
          <h1 className='font-bold text-3xl mb-2'>
            Apartment {selectedApartment?.id}
          </h1>
          <div className='flex md:flex-row flex-col md:items-center md:justify-center mt-9 mb-5'>
            <h2 className='font-medium md:border-r-[2px] border-gray-300 px-2'>
              Unit Type:{' '}
              <span className='font-light'>{selectedApartment?.unitType}</span>
            </h2>
            <h2 className='font-medium md:border-r-[2px] py-0 border-gray-300 px-2 '>
              Number of Rooms:{' '}
              <span className='font-light'>{selectedApartment?.rooms}</span>
            </h2>
            <h2 className='font-medium md:border-r-[2px] border-gray-300 px-2'>
              Area:{' '}
              <span className='font-light'>{selectedApartment?.area}</span>
            </h2>
          </div>
          <div className='mt-5'>
            <h1 className='text-lg font-medium'>Description</h1>
            <p className='line-clamp-5'>
              {selectedApartment?.description || apartmentData[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutDetail
