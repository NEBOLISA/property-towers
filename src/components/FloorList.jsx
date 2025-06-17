import React from 'react'
import { data } from '../data/data'
import { Link, useParams } from 'react-router-dom'


function FloorList() {
    const { towerId } = useParams()
    
    const tower = data.towers.find((tower) => tower.id === Number(towerId))
  
   
  return (
    <div className='p-4 px-0 grid sm:grid-cols-2 md:grid-cols-3  gap-4 grid-cols-1 grid-rows-[auto] '>
      {tower.floors.map((floor) => {
        return (
          <Link
            to={`/tower/${towerId}/floor/${floor.id}`}
            key={floor.id}
            className={`bg-gray-50 p-4  rounded-lg shadow-sm hover:shadow-md cursor-pointer relative  `}
          >
            
            <div
              className={` h-full overflow-hidden`}
            >
              <h2 className='font-bold text-2xl mb-2'>{floor.name}</h2>
              <img
                src={floor.image}
                alt={`${floor.name} layout`}
                className='w-full h-32 object-cover rounded-md mb-2'
              />
              <p>
                <strong>Apartments:</strong> {floor.apartments.length}
              </p>
              
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default FloorList
