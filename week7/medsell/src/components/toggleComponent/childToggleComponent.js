import React from 'react'

const ChildToggleComponent = ({ isOn, toggleSwitch }) => {
    return (
        <div>
          <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
          <button onClick={toggleSwitch}>Toggle switch in Child component</button>
        </div>
      );
}

export default ChildToggleComponent