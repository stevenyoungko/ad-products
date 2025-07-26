import React from 'react';

const CTAButton = () => (
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

export default CTAButton; 