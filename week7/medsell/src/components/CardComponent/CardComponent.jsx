import React from "react";

const CardComponent = (props) => {
  const productData = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1720247522784-ba24b938534d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
      title: "Venice",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque amet error officia animi, a quis nobis excepturi modi, eum itaque dolor perspiciatis blanditiis dignissimos illum repellendus vero maiores sed magnam."
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1720640320081-763dc112f1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      title: "Paris",
      description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque amet error officia animi, a quis nobis excepturi modi, eum itaque dolor perspiciatis blanditiis dignissimos illum repellendus vero maiores sed magnam."

    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1720247522784-ba24b938534d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rome",
      description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque amet error officia animi, a quis nobis excepturi modi, eum itaque dolor perspiciatis blanditiis dignissimos illum repellendus vero maiores sed magnam."

    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1720640320081-763dc112f1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      title: "Brussels",
      description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque amet error officia animi, a quis nobis excepturi modi, eum itaque dolor perspiciatis blanditiis dignissimos illum repellendus vero maiores sed magnam."

    },
  ];
  return (
    <div className="ml-10">
      <h1>Card Component</h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-8">
        {props.data.map((product, index) => {
          return (
            <div className="px-6 py-4" key={index}>
              <img src={product.imgUrl} alt="img" />
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardComponent;
