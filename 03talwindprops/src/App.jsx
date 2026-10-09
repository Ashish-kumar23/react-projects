import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-white text-lg p-4 font-bold rounded-lg text-2xl">
        Tailwind CSS test
      </h1>
      <Card username= "Ashish" btnText="visit more" />
      <Card username= "John" btnText="Learn more" />
    </>
  )
}

export default App
