import React from 'react'

const CounterChildComponent = ({ counter, increment, decrement }) => {
  return (
    <div>
      <p>Current Count: {counter}</p>
      <button onClick={increment}>Increment in Child</button>
      <button onClick={decrement}>Decrement in Child</button>
    </div>
  )
}

export default CounterChildComponent