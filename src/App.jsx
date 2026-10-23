import { Outlet } from 'react-router-dom'

import './App.css'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className="App">
     <Navbar />
     <main className="app-content">
       <Outlet />
     </main>
    </div>
  )
}

export default App
