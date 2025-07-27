import React from 'react';

const CTAButton = ({ size = '320x50' }) => {
  if (size === '300x250') {
    return (
      <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center bg-white border-t border-gray-200 gap-2 px-4">
        <img 
          src="https://www.appier.com/hubfs/Appier%20Website%20Images/Logos/appier-logo.svg" 
          alt="Appier" 
          className="h-6 w-auto"
        />
        <div className='text-black font-bold text-sm'>
          로켓배송 상품, 오늘주문! 내일도착!
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-0 h-full w-20 flex flex-col items-center justify-center bg-white text-black border-l border-gray-200 gap-1">
      <img 
        src="https://www.appier.com/hubfs/Appier%20Website%20Images/Logos/appier-logo.svg" 
        alt="Appier" 
        className="h-4 w-full"
      />
      <button className="bg-[#0074e9] hover:bg-[#0056b3] text-white text-xs px-1 rounded flex items-center gap-1">
        <span>Buy Me</span>
      </button>
    </div>
  );
};

export default CTAButton; 