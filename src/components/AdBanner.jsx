import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import productsData from '../mock/products.json';

const AdBanner = () => {
  const [products] = useState(productsData);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center h-full mr-20">
      <div className="w-full h-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={2}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.sku} className="h-full">
              <div className={`flex items-center justify-center h-full p-1 ${activeIndex === index ? 'border-1 border-blue-500 rounded' : ''}`}>
                <img
                  src={product.img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-contain rounded-sm"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AdBanner; 