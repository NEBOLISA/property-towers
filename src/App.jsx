import './App.css'
import Header, { Dropdown } from './components/Header'
import AppRoutes from './routes/AppRoutes'

function App() {
  return(
    <div className='relative'>
    
    <Header/>
  <AppRoutes />
    </div>
  )
}

export default App
