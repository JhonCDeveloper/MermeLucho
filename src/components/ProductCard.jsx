import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">${product.price}</p>
            <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                Add to Cart
            </button>
        </div>
    );
};


export default ProductCard;