import TrainingHero from '../components/TrainingHero';
import TrainingCarousel from '../components/TrainingCarousel';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import Footer from '../components/Footer';

function TrainingPage() {
  return (
    <div className="training-page">
      <TrainingHero />
      <TrainingCarousel />
      <WhatSetsUsApart />
      <Footer />
    </div>
  );
}

export default TrainingPage;
