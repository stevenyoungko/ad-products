import { useState, useEffect } from 'react';
import AdBanner from './components/AdBanner';
import CTAButton from './components/CTAButton';
import productsData from './mock/products.json';

const containerStyles = {
  '320x50': 'relative w-[320px] h-[50px] bg-white border border-gray-200 overflow-hidden',
  '300x250': 'relative w-[300px] h-[250px] bg-white border border-gray-200 overflow-hidden',
  '160x600': 'relative w-[160px] h-[600px] bg-white border border-gray-200 overflow-hidden'
};

function App() {
  const [adSize, setAdSize] = useState('320x50');
  const [products] = useState(productsData);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <main className="flex items-center justify-center min-h-screen" role="main">
      <aside 
        className={containerStyles[adSize]}
        role="complementary"
      >
        <AdBanner 
          size={adSize} 
          activeIndex={activeIndex}
          products={products}
        />
        <CTAButton size={adSize} />
      </aside>
    </main>
  );
}

export default App;
