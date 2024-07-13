import React from 'react'
import CardComponent from '../CardComponent/CardComponent'
import EventHandling from '../EventHandling/EventHandling'

const HomeComponent = () => {
  const productData = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1720247522784-ba24b938534d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
      title: "Meow",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque amet error officia animi, a quis nobis excepturi modi, eum itaque dolor perspiciatis blanditiis dignissimos illum repellendus vero maiores sed magnam."
    }]
  return (
    <>
    <EventHandling/>
          <CardComponent data={productData}/>

    </>

  )
}

export default HomeComponent