import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

  let[counter , setCounter] = useState(15)

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log("clicked" , counter);
    }

    const removeValue = () => {
      setCounter(counter - 1)
      console.log("removed", counter);
      
    }
  return (
    <>
      <h1> Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onclick={addValue}> Add value {counter}</button>
      <br />
      <br />
      <button onclick = {removeValue}> Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}
