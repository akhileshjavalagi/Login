import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Sign from './components/Sign'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <Sign/> */}
     <Login/>
    </div>
  )
}

export default App
