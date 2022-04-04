import './App.css'
import TheHeader from './components/Header'
import HeroSection from './components/HeroSection'
import TheCard from './components/Card';

import courseData from "./data"

function App() {
  const cards = courseData.map(course => 
    <TheCard coverImg={course.coverImg}
             rating={course.stats.rating}
             reviewCount={course.stats.reviewCount} 
             location={course.location} 
             title={course.title} 
             price={course.price} />
  )
  return (
    <div className="App">
      <TheHeader />
      <div className="content__container">
        <HeroSection />
      </div>
      <section className="card-section">
        {cards}
      </section>
    </div>
  );
}

export default App;
