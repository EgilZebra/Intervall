import { useState } from 'react'
import LoadingVy from './pages/loadingpage/loading'
import './App.css'
import {  
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from 'react-router-dom'
import { TimerPage } from './pages/TimerPage/TimerPage'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<LoadingVy />} />
      <Route path='/timer' element={<TimerPage />} />
    </Route>
  )
)
function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='App--wrapper'>
      <RouterProvider router={router} />
    </div>
  )
    
}

export default App
