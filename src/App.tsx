import React, { useState } from 'react';
import SlideNav from './components/SlideNav';
import Slide1 from './components/slides/Slide1_Cover';
import Slide2 from './components/slides/Slide2_IndustryOverview';
import Slide3 from './components/slides/Slide3_Applications';
import Slide4 from './components/slides/Slide4_EpicGamesCase';
import Slide5 from './components/slides/Slide5_DuolingoCase';
import Slide6 from './components/slides/Slide6_TencentCase';
import Slide7 from './components/slides/Slide7_UnityCase';
import Slide8 from './components/slides/Slide8_Conclusion';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const CurrentSlide = slides[index];

  return (
    <div className="h-screen overflow-hidden">
      <CurrentSlide />
      <SlideNav
        current={index + 1}
        total={slides.length}
        onPrev={() => setIndex((i) => Math.max(i - 1, 0))}
        onNext={() => setIndex((i) => Math.min(i + 1, slides.length - 1))}
      />
    </div>
  );
};

export default App;
