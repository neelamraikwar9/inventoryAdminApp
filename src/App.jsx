
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import InventoryForm from './pages/InventoryForm'
import RemovedItems from './pages/RemovedItems'
import RemainingItems from './pages/RemainingItems'
import Inventory from './pages/Inventory'

function App() {

  return (
    <>
    <div>
      <nav>
        <ul>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/removedItems">Removed Items</Link></li>
          <li><Link to="/remainingItems">Remaining Items</Link></li>
          <li><Link to="/">Add New Items</Link></li>
        </ul>
      </nav>
    </div>

    <div>
      <Routes>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/removedItems" element={<RemovedItems/>}/>
        <Route path="/remainingItems" element={<RemainingItems/>}/>
        <Route path="/" element={<InventoryForm/>}/>
      </Routes>
    </div>
      
    </>
  )
}

export default App
