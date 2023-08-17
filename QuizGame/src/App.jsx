import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const test = Math.floor(Math.random() * 5); 

  return (
    
  <div className='main'>
    <div className='bar'> </div>
        <div className='progress'>Quiz Progress | {count} | </div>
  </div>
  
  )
}

export default App
