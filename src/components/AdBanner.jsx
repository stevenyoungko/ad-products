import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import productsData from '../mock/products.json';

const swiperConfig = {
  '160x600': {
    slidesPerView: 3,
    direction: 'vertical',
    spaceBetween: 2,
    slidesPerGroup: 3,
    containerClassName: 'w-full h-[calc(100%-48px)]',
  },
  '300x250': {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 0,
    slidesPerGroup: 1,
    containerClassName: 'w-full h-[calc(100%-48px)]',
  },
  '320x50': {
    slidesPerView: 5,
    direction: 'horizontal',
    spaceBetween: 2,
    slidesPerGroup: 5,
    containerClassName: 'flex items-center h-full mr-20',
  },
};

const AdBanner = ({ size = '320x50' }) => {
  const [products] = useState(productsData);
  const [activeIndex, setActiveIndex] = useState(0);
  const config = swiperConfig[size] || swiperConfig['320x50'];
  const swiperRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [products.length]);

  useEffect(() => {
    if (swiperRef.current) {
      const { slidesPerView } = config;
      const page = Math.floor(activeIndex / slidesPerView);
      const slideToIndex = page * slidesPerView;
      if (swiperRef.current.realIndex !== slideToIndex) {
        swiperRef.current.slideToLoop(slideToIndex);
      }
    }
  }, [activeIndex, config]);

  return (
    <div className={config.containerClassName}>
      <Swiper
        spaceBetween={config.spaceBetween}
        slidesPerView={config.slidesPerView}
        direction={config.direction}
        slidesPerGroup={config.slidesPerGroup}
        loop={true}
        autoplay={false}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => {
          const firstVisibleIndex = swiper.realIndex;
          setActiveIndex(firstVisibleIndex);
        }}
        className="w-full h-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.sku} className="h-full">
            <div className={`flex items-center justify-center h-full p-1 ${
              activeIndex === index ? 'border-1 border-blue-500 rounded' : ''
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
  );
};

export default AdBanner; 