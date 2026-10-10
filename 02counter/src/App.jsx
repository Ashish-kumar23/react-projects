import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);
  let [color, setColor] = useState('olive');


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
    <div className="w-full h-screen flex flex-wrap" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <h2 className="w-1/3 bg-white flex flex-wrap justify-center rounded-full h-10 items-center shadow-lg f">Counter value: {counter}</h2>

        <div className="fixed top-20 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mt-5 w-1/4">

          <button className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          onClick={addvalue}
          style={{backgroundColor: "red"}}
          >Add value</button>
          <br />

          <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          onClick = {removevalue}
          style={{backgroundColor: "yellow"}}
          >remove value</button>
          <br/>

          <button 
          className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
          onClick= {resetValue} 
          style={{backgroundColor: "blue"}}>Reset Value</button>
          </div>
        </div>
    </div>
  )
}

export default App
