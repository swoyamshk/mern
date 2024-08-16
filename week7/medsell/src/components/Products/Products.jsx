import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/product/getAllProducts');  // Fetch all products
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product._id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img 
            src={product.productImage} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="text-gray-800 mt-2 font-medium"><strong>Price:</strong> ${product.price}</p>
            <p className="text-gray-800 mt-1"><strong>Brand:</strong> {product.brand}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
