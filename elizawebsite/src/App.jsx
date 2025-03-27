import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <h1 class="headers">TEAM ELIZA</h1>
      <div class='body'>
        <div class='infobox'>
          <div >
            <h3 class="headers">About us</h3>
          </div>
          <div>
            <h3 class="title">Drone<span class="highlight">Zone</span></h3>
          </div>
        </div>
        <div class='visualbox'>
          <div >
            <h3 class="headers">TEAM MEMBERS</h3>
          </div>
          <div>
            <p>visual representative of progress</p>
          </div>
        </div>
      </div>  
   </div>
  )
}

export default App
