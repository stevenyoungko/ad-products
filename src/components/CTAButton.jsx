import React from 'react';
import { adConfig } from '../config/adConfig';

const layoutConfig = {
  '160x600': {
    container: "absolute bottom-0 left-0 right-0 h-12 flex items-center justify-between bg-white border-t border-gray-200 px-4",
    logo: "h-6 w-auto",
    content: `${adConfig.cta.backgroundColor} ${adConfig.cta.hoverBackgroundColor} ${adConfig.cta.textColor} text-xs px-2 py-1 rounded flex items-center gap-1`,
    showText: true,
    showButton: true
  },
  '300x250': {
    container: "absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center bg-white border-t border-gray-200 gap-2 px-4",
    logo: "h-6 w-auto",
    content: "text-black font-bold text-sm",
    showText: true,
    showButton: false
  },
  '320x50': {
    container: "absolute right-0 top-0 h-full w-20 flex flex-col items-center justify-center bg-white text-black border-l border-gray-200 gap-1",
    logo: "h-4 w-full",
    content: `${adConfig.cta.backgroundColor} ${adConfig.cta.hoverBackgroundColor} ${adConfig.cta.textColor} text-xs px-1 rounded flex items-center gap-1`,
    showText: true,
    showButton: true
  }
};

const CTAButton = ({ size = '320x50' }) => {
  const config = layoutConfig[size] || layoutConfig['320x50'];

  return (
    <div className={config.container}>
      <img 
        src={adConfig.logo.url} 
        alt={adConfig.logo.alt} 
        className={config.logo}
      />
      {config.showText && (
        config.showButton ? (
          <button className={config.content} type='button'>
            <span>{adConfig.cta.text}</span>
          </button>
        ) : (
          <h3 className={config.content}>
            {adConfig.headline.text}
          </h3>
        )
      )}
    </div>
  );
};

export default CTAButton; 