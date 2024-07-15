import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const message1 = "Hello from Parent Component"
  return (
    <ChildComponent message={message1}/>
  )
}

export default ParentComponent