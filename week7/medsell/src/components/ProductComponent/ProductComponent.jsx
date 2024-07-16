import React, { useState } from 'react';

const ProductComponent = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDate, setProductDate] = useState("");
  const [productCategory, setProductCategory] = useState("");

  return (
    <>
      <div className='text-center text-2xl p-2'>Add Product</div>
      <form className='flex justify-center'>
        <div>
          <h1>{productName} - {productPrice} - {productDate} - {productCategory}</h1>
          <label className='text-xl text-blue-800' htmlFor='product-name'>Product Name</label><br/>
          <input
            onChange={(e) => setProductName(e.target.value)}
            className='border-2 border-blue rounded-lg p-2'
            type="text"
            name="product-name"
            placeholder='Enter Product Name'
            id="product-name"
          /><br/>
          
          <label className='text-xl text-blue-800' htmlFor='product-price'>Product Price</label><br/>
          <input
            onChange={(e) => setProductPrice(e.target.value)}
            className='border-2 border-blue rounded-lg p-2'
            type="text"
            name="product-price"
            placeholder='Enter Product Price'
            id="product-price"
          /><br/>
          
          <label className='text-xl text-blue-800' htmlFor='product-date'>Product Date</label><br/>
          <input
            onChange={(e) => setProductDate(e.target.value)}
            className='border-2 border-blue rounded-lg p-2'
            type="text"
            name="product-date"
            placeholder='Enter Product Date'
            id="product-date"
          /><br/>
          
          <label className='text-xl text-blue-800' htmlFor='product-category'>Product Category</label><br/>
          <select
            onChange={(e) => setProductCategory(e.target.value)}
            className='border-2 border-blue rounded-lg p-2'
            name="product-category"
            id="product-category"
          >
            <option value="">Select Category</option>
            <option value="Fruit">Fruit</option>
            <option value="Spice">Spice</option>
            <option value="Meat">Meat</option>
          </select><br/>
        </div>
      </form>
    </>
  );
}

export default ProductComponent;
