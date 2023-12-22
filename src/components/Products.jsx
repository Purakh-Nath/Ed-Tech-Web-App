import React, { useState } from "react";

const Products = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // Implement logic to add product to cart (e.g., update server data)
    alert(`Added ${quantity} ${product.name} to cart!`);
  };
  const productss = {
    names: ["Cozy Knit Sweater", "Stylish Sunglasses", "Smartwatch Pro"],
    descriptions: [
      "Stay warm and comfortable in this ultra-soft knit sweater, perfect for fall evenings.",
      "Protect your eyes and look chic with these trendy sunglasses in a variety of styles.",
      "Stay connected and track your fitness goals with this sleek smartwatch with advanced features.",
    ],
    prices: [49.99, 29.99, 199.99],
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
    <div className="flex items-center w-3/4 h-15 px-4 bg-gray-100 shadow-md rounded-md mt-4 -10 mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 w-full border-none rounded-md focus:outline-none"
         
        />
      </div>

    <div className="flex flex-row">

      <div className="flex-1 h-full mr-4">
        <img src='https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?cs=srgb&dl=pexels-pixabay-256381.jpg&fm=jpg&w=1280&h=852&_gl=1*g1q74i*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA2NDA0Ni4zLjEuMTcwMzA2NDExNC4wLjAuMA..' alt="" className="object-cover object-center w-3/4 h-full  shadow-md p-4 ml-14 rounded" />
      </div>
      <div className="flex-1 px-4 py-2 space-y-4">
        <h3 className="text-lg font-bold text-gray-700 mb-1">Cozy Knit Sweater</h3>
        <p className="text-black font-semibold">Stay warm and comfortable in this ultra-soft knit sweater, perfect for fall evenings.</p>
        <br /><span className="font-bold text-gray-900">₹1500</span>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-2 py-1 text-gray-900 hover:text-blue-700"
          >
            -
          </button>
          <span className="font-bold">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="px-2 py-1 text-gray-900 hover:text-blue-700"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={addToCart}
          className="px-4 py-2 bg-black text-white font-bold rounded-md shadow-md hover:bg-green-700"
        >
          Add to Cart
        
        </button>
       
      </div>
     
    </div>

    <div className="flex flex-row">

<div className="flex-1 h-full mr-4">
  <img src='https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?cs=srgb&dl=pexels-pixabay-256381.jpg&fm=jpg&w=1280&h=852&_gl=1*g1q74i*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA2NDA0Ni4zLjEuMTcwMzA2NDExNC4wLjAuMA..' alt="" className="object-cover object-center w-3/4 h-full  shadow-md p-4 ml-14 rounded" />
</div>
<div className="flex-1 px-4 py-2 space-y-4">
  <h3 className="text-lg font-bold text-gray-700 mb-1">Cozy Knit Sweater</h3>
  <p className="text-black font-semibold">Stay warm and comfortable in this ultra-soft knit sweater, perfect for fall evenings.</p>
  <br /><span className="font-bold text-gray-900">₹1500</span>
  <div className="flex items-center space-x-2">
    <button
      type="button"
      onClick={() => setQuantity(Math.max(1, quantity - 1))}
      className="px-2 py-1 text-gray-900 hover:text-blue-700"
    >
      -
    </button>
    <span className="font-bold">{quantity}</span>
    <button
      type="button"
      onClick={() => setQuantity(quantity + 1)}
      className="px-2 py-1 text-gray-900 hover:text-blue-700"
    >
      +
    </button>
  </div>
  <button
    type="button"
    onClick={addToCart}
    className="px-4 py-2 bg-black text-white font-bold rounded-md shadow-md hover:bg-green-700"
  >
    Add to Cart
  
  </button>
 
</div>

</div>
<div className="flex flex-row">

<div className="flex-1 h-full mr-4">
  <img src='https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?cs=srgb&dl=pexels-pixabay-256381.jpg&fm=jpg&w=1280&h=852&_gl=1*g1q74i*_ga*MTk2MTM3MzY4Mi4xNzAzMDQ4MTE2*_ga_8JE65Q40S6*MTcwMzA2NDA0Ni4zLjEuMTcwMzA2NDExNC4wLjAuMA..' alt="" className="object-cover object-center w-3/4 h-full  shadow-md p-4 ml-14 rounded" />
</div>
<div className="flex-1 px-4 py-2 space-y-4">
  <h3 className="text-lg font-bold text-gray-700 mb-1">Cozy Knit Sweater</h3>
  <p className="text-black font-semibold">Stay warm and comfortable in this ultra-soft knit sweater, perfect for fall evenings.</p>
  <br /><span className="font-bold text-gray-900">₹1500</span>
  <div className="flex items-center space-x-2">
    <button
      type="button"
      onClick={() => setQuantity(Math.max(1, quantity - 1))}
      className="px-2 py-1 text-gray-900 hover:text-blue-700"
    >
      -
    </button>
    <span className="font-bold">{quantity}</span>
    <button
      type="button"
      onClick={() => setQuantity(quantity + 1)}
      className="px-2 py-1 text-gray-900 hover:text-blue-700"
    >
      +
    </button>
  </div>
  <button
    type="button"
    onClick={addToCart}
    className="px-4 py-2 bg-black text-white font-bold rounded-md shadow-md hover:bg-green-700"
  >
    Add to Cart
  
  </button>
 
</div>

</div>

    </div>
  );
};

export default Products;