import React, { useState } from 'react';
import productsData from '../mock/products.json';

const AdBanner = () => {
  const [products] = useState(productsData);

  return (
    <div>
      {products.map((product) => (
        <img
          key={product.sku}
          src={product.img}
          alt=""
          className="object-cover w-full mb-2"
        />
      ))}
    </div>
  );
};

export default AdBanner; 