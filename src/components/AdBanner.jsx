import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import productsData from '../mock/products.json';

const swiperConfig = {
  '160x600': {
    slidesPerView: 3,
    direction: 'vertical',
    spaceBetween: 2,
    className: 'w-full h-full',
    slideClassName: 'h-full',
    containerClassName: 'w-full h-[calc(100%-48px)]',
    showBorder: true,
  },
  '300x250': {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 0,
    className: 'w-full h-full',
    slideClassName: 'h-full',
    containerClassName: 'w-full h-[calc(100%-48px)]',
    showBorder: false,
  },
  '320x50': {
    slidesPerView: 5,
    direction: 'horizontal',
    spaceBetween: 2,
    className: 'w-full h-full',
    slideClassName: 'h-full',
    containerClassName: 'flex items-center h-full mr-20',
    showBorder: true,
  },
};

const AdBanner = ({ size = '320x50' }) => {
  const [products] = useState(productsData);
  const [activeIndex, setActiveIndex] = useState(0);
  const config = swiperConfig[size] || swiperConfig['320x50'];

  return (
    <div className={config.containerClassName}>
      <div className="w-full h-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={config.spaceBetween}
          slidesPerView={config.slidesPerView}
          direction={config.direction}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={config.className}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.sku} className={config.slideClassName}>
              <div className={`flex items-center justify-center h-full ${
                config.showBorder 
                  ? `p-1 ${activeIndex === index ? 'border-1 border-blue-500 rounded' : ''}`
                  : activeIndex === index 
                    ? 'border border-blue-500' 
                    : 'border border-gray-200'
              }`}>
                <img
                  src={product.img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-contain rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => window.open(product.url, '_blank', 'noopener,noreferrer')}
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