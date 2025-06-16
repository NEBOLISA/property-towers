import { Routes, Route } from 'react-router-dom'
import TowerOverView from '../pages/TowerOverView'
import FloorView from '../pages/FloorView'
import LayoutView from '../pages/LayoutView'



const AppRoutes = () => (
  <>
      
    <Routes>
      <Route path='/' element={<TowerOverView />} />
      <Route path='/tower/:towerId' element={<FloorView />} />
      <Route path='/tower/:towerId/floor/:floorId' element={<LayoutView />} />
    </Routes>
       
  </>
)

export default AppRoutes
