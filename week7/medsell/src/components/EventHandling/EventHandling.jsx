import React from 'react'

const EventHandling = () => {
    const handleClick =()=>{

    }
  return (
    <div>
        <h1>EventHandling</h1>
        <button onClick={()=>handleClick()} className='bg-blue-500'>Click Me</button>
    </div>
  )
}

export default EventHandling