import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className="max-w-xs bg-white rounded overflow-hidden shadow-md">
      <img src={item.category.image} alt={item.category.name} className="w-full my-2" />
    </div>
  );
};

export default ProductCard;
