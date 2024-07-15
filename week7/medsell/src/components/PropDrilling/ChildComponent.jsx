import React from 'react'
import GrandChildComponent from './GrandChildComponent'

const ChildComponent = ({ message }) => {
    return (
        <div>
            <div>{message}</div>
            <GrandChildComponent message={message}/>
        </div>
    )
}

export default ChildComponent
