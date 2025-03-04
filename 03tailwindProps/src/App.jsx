import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card9 from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [ 1, 2, 3]

  return (
    <>
     <h1 className='bg-amber-600 text-black p-2 rounded-2xl'>Tailwind Test</h1>
     <Card9 username="chaiaurcode"/>
     <Card9 username="satakshi"/>
    </>
  )
}

export default App
