import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);


 const addvalue = () => {
  if(counter < 20){
    counter = counter + 1
    setCounter(counter)
  }
 }

  const removevalue = () => {
    if(counter > 0){
      counter = counter - 1
      setCounter(counter)
    }
  }

  const resetValue = () => {
    counter = 0
    setCounter(counter)
  }

  return (
    <>
      
      <h2>Counter value: {counter}</h2>


      <button 
      onClick={addvalue}
      >Add value</button>
      <br />

      <button 
      onClick = {removevalue}
      >remove value</button>
      <br/>

      <button onClick= {resetValue}>Reset Value</button>

    </>
  )
}

export default App
