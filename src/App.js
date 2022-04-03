import './App.css'
import TheHeader from './components/Header'
import HeroSection from './components/HeroSection'
import TheCard from './components/Card';

import katieZaferes from "./images/katie-zaferes.png";

function App() {
  return (
    <div className="App">
      <TheHeader />
      <div className="content__container">
        <HeroSection />
      </div>
      <TheCard 
        img={katieZaferes}
        name="Katie Zaferes"
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"
      />
    </div>
  );
}

export default App;
