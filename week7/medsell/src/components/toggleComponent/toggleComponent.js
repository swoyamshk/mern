import React, { useState }from 'react'
import ChildToggleComponent from './childToggleComponent';

const ToggleComponent = () => {
    const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };
  return (
    <div className='mb-5 ml-5'>
      <ChildToggleComponent isOn={isOn} toggleSwitch={toggleSwitch} />
      <button onClick={toggleSwitch}>Toggle Switch in parent Component</button>
    </div>
  )
}

export default ToggleComponent;