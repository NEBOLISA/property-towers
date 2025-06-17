import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import TowerCard from '../components/TowerCard'
import { data } from '../data/data'

const TowerOverView = () => {
  const towerData = data.towers
  return (
    <div className='text-black'>
      <HeroSection />
      <div className='mx-auto w-[80%] '>
        <h2 className='font-bold text-3xl mt-10'>Towers</h2>
        <div className='lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1  gap-10'>

        {towerData.map((tower) => (
          <TowerCard
            image={tower.image}
            description={tower.description}
            title={tower.name}
            id={tower.id}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default TowerOverView
