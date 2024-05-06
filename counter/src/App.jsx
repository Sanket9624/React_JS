import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  let [counter , setCounter] = useState(15)

  const addCount = () =>{
    if(counter+1>20){
      alert("Limit Exceeds")
    }
    else{
    counter = counter + 1;
    setCounter(counter)
    }
  }

  const removeCount = () => {
    if(counter-1<0){
      alert("Negative value is not allowed")
    }
    else{
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick= {addCount}>
        Increase Count
      </button>
      <br />
      <br />
      <button onClick={removeCount}>
        Decrese Count
      </button>
    </>
  )
}

export default App
