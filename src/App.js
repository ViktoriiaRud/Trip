import React from 'react'
import Navigation from './components/organisms/navigation/Navigation';
import CombinedShare from './components/organisms/combinedShape/CombinedShare';
import ExclusiveOffers from './components/organisms/exclusiveOffers/ExclusiveOffers';
import Expeditions from './components/organisms/expeditions/Expeditions';
import MirrorReflection from './components/organisms/mirrorReflection/MirrorReflection';
import Testimonials from './components/organisms/testimonials/Testimonials';
import MyBlog from './components/organisms/myBlog/MyBlog';

function App() {
  return (
    <div className="App">
      <Navigation />
      <CombinedShare />
      <ExclusiveOffers />
      <Expeditions />
      <MirrorReflection />
      <Testimonials />
      <MyBlog />
    </div>
  );
}

export default App;
