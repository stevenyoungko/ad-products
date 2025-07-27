import React from 'react';

const layoutConfig = {
  '160x600': {
    container: "absolute bottom-0 left-0 right-0 h-12 flex items-center justify-between bg-white border-t border-gray-200 px-4",
    logo: "h-6 w-auto",
    content: "bg-[#0074e9] hover:bg-[#0056b3] text-white text-xs px-2 py-1 rounded flex items-center gap-1",
    text: "Buy Me",
    showText: true,
    showButton: true
  },
  '300x250': {
    container: "absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center bg-white border-t border-gray-200 gap-2 px-4",
    logo: "h-6 w-auto",
    content: "text-black font-bold text-sm",
    text: "로켓배송 상품, 오늘주문! 내일도착!",
    showText: true,
    showButton: false
  },
  '320x50': {
    container: "absolute right-0 top-0 h-full w-20 flex flex-col items-center justify-center bg-white text-black border-l border-gray-200 gap-1",
    logo: "h-4 w-full",
    content: "bg-[#0074e9] hover:bg-[#0056b3] text-white text-xs px-1 rounded flex items-center gap-1",
    text: "Buy Me",
    showText: true,
    showButton: true
  }
};

const CTAButton = ({ size = '320x50' }) => {
  const config = layoutConfig[size] || layoutConfig['320x50'];

  return (
    <div className={config.container}>
      <img 
        src="https://www.appier.com/hubfs/Appier%20Website%20Images/Logos/appier-logo.svg" 
        alt="Appier" 
        className={config.logo}
      />
      {config.showText && (
        config.showButton ? (
          <button className={config.content}>
            <span>{config.text}</span>
          </button>
        ) : (
          <div className={config.content}>
            {config.text}
          </div>
        )
      )}
    </div>
  );
};

export default CTAButton; 