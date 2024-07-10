import React, {useState} from 'react'
import CounterChildComponent from './CounterChildComponent';

const CounterParentComponent = () => {
    const [counter, setCounter] = useState(0);
  
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1);
    };
  
    const decrement = () => {
      setCounter(prevCounter => prevCounter - 1);
    };
  
    return (
      <div  className='mb-5 ml-5'>
        <CounterChildComponent counter={counter} increment={increment} decrement={decrement} />
        <button onClick={increment}>Increment in Parent</button>
        <button onClick={decrement}>Decrement in Parent</button>
      </div>
    );
  };

export default CounterParentComponent