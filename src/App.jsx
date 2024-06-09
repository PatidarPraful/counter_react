import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
    let [counter,setCounter] = useState(15)

    const addValue = ()=> {
      if(counter<20)
        {
          counter = counter + 1;
          setCounter(counter);

        }
     
    }

    const removeVal = () => {
      if(counter > 0)
        {
           counter = counter-1;
           setCounter(counter)
        }   
    }
  return (
    <>
     <h1>Counter Game</h1>
     <h2> counter value : {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={removeVal}>Remove Value</button>

     <p>footer : {counter}</p>
     
    </>
  )
}

export default App
