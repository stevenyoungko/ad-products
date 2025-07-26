import AdBanner from './components/AdBanner';
import CTAButton from './components/CTAButton';

function App() {
  return (
    <div className="relative w-[320px] h-[50px] bg-white border border-gray-200 overflow-hidden">
      <AdBanner />
      <CTAButton />
    </div>
  );
}

export default App;
