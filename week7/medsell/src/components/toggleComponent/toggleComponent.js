import React, { useState }from 'react'
import ChildToggleComponent from './childToggleComponent';

const ToggleComponent = () => {
    const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };
  return (
    <div>
      <ChildToggleComponent isOn={isOn} toggleSwitch={toggleSwitch} />
      <button onClick={toggleSwitch}>Toggle Switch in parent Component</button>
    </div>
  )
}

export default ToggleComponent;