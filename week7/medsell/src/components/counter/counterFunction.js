import React, { useState } from 'react'
import './counter.css'

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <>
      <div id='counter'>
        <h1>Counter Function</h1>
        <h2>Count:{count}</h2>
        <button onClick={increment} >Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </>
  )
}

export default CounterFunction;
