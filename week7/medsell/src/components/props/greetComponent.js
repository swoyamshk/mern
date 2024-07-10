import React from 'react'

const GreetComponent = (props) => {
    const styles={
        div:{
            backgroundColor: 'lightblue',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            boxShadow: '0 0 5px 1px lightblue'
        }
    }
  return (
    <div style={styles.div} className='underline text-bold'>
        <h1 >Greet</h1>
        <p>Hello, we are learning {props.name}</p>
    </div>
  )
}

export default GreetComponent;