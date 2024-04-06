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
        <img src='https://unsplash.com/photos/o0Qqw21-0NI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEyNDIxNDA3fA&force=true&w=1920' alt="" className="object-cover object-center w-3/4 h-full  shadow-md  ml-14 rounded-3xl mt-5" />
      </div>
      <div className="flex-1 px-4 py-2 space-y-4">
        <h3 className="text-lg font-bold text-red-600 mb-1 mt-6">"The Alchemist" by Paulo Coelho</h3>
        <p className="text-black font-bold text-xl">A timeless tale about following your dreams and finding your true purpose in life. It's a story of self-discovery and the journey towards fulfilling one's destiny.</p>
        <br /><span className="font-bold text-gray-900">₹500</span>
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
  <img src='https://unsplash.com/photos/D4YrzSwyIEc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGJvb2tzfGVufDB8fHx8MTcxMjQwMDU0NXww&force=true&w=1920' alt="" className="object-cover object-center w-3/4 h-full mt-5  shadow-md  ml-14 rounded-3xl" />
</div>
<div className="flex-1 px-4 py-2 space-y-4">
  <h3 className="text-lg font-bold text-red-600 mb-1 mt-6">"The Great Gatsby" by F. Scott Fitzgerald</h3>
  <p className="text-black font-bold text-xl">Set in the 1920s, this novel explores the decadence and disillusionment of the American Dream through the eyes of Jay Gatsby, a wealthy and enigmatic figure.</p>
  <br /><span className="font-bold text-gray-900">₹700</span>
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
  <img src='https://unsplash.com/photos/9BoqXzEeQqM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEyNDIxMjg1fA&force=true&w=1920' alt="" className="object-cover object-center w-3/4 h-full  shadow-md mt-5 ml-14 rounded-3xl" />
</div>
<div className="flex-1 px-4 py-2 space-y-4">
  <h3 className="text-lg font-bold text-red-600 mb-1 mt-6">"Thinking, Fast and Slow" by Daniel Kahneman</h3>
  <p className="text-black font-bold text-xl">Kahneman, a Nobel Prize-winning psychologist, explores the two systems that drive the way we think: the fast, intuitive system and the slow, deliberate system.</p>
  <br /><span className="font-bold text-gray-900">₹600</span>
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