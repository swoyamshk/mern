import React from 'react'

const EventHandling = ({onButtonClick}) => {
    
  return (
    <div>
        <h1>EventHandling</h1>
        <button onClick={onButtonClick}  className='bg-blue-500'>Click Me</button>
    </div>
  )
}

export default EventHandling