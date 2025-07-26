import React, { useState } from 'react';
import productsData from '../mock/products.json';

const AdBanner = () => {
  const [products] = useState(productsData.slice(0, 5)); // Show only 5 products for 320x50 layout

  return (
    <div className="flex items-center h-full mr-20">
      <div className="flex items-center justify-center flex-1 h-full px-1">
        <div className="grid grid-cols-5 gap-1 w-full h-full">
          {products.map((product, index) => (
            <div key={product.sku} className="flex items-center justify-center h-full">
              <img
                src={product.img}
                alt={`Product ${index + 1}`}
                className="max-w-full max-h-full object-contain rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdBanner; 