import { useState, useEffect } from 'react';
import AdBanner from './components/AdBanner';
import CTAButton from './components/CTAButton';

function App() {
  const [adSize, setAdSize] = useState('320x50');

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      
      if (width >= 1024) {
        setAdSize('160x600');
      } else if (width >= 600 && width < 1024) {
        setAdSize('300x250');
      } else {
        setAdSize('320x50');
      }
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);

    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const containerStyles = {
    '320x50': 'relative w-[320px] h-[50px] bg-white border border-gray-200 overflow-hidden',
    '300x250': 'relative w-[300px] h-[250px] bg-white border border-gray-200 overflow-hidden',
    '160x600': 'relative w-[160px] h-[600px] bg-white border border-gray-200 overflow-hidden'
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={containerStyles[adSize]}>
        <AdBanner size={adSize} />
        <CTAButton size={adSize} />
      </div>
    </div>
  );
}

export default App;
