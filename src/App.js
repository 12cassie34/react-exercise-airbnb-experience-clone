import "./App.css";
import TheHeader from "./components/Header";
import HeroSection from "./components/HeroSection";
import TheCard from "./components/Card";

import courseData from "./data";

function App() {
  const cards = courseData.map((course) => (
    <TheCard key={course.id} item={course} />
  ));
  return (
    <div className="App">
      <TheHeader />
      <div className="content__container">
        <HeroSection />
        <div className="card-section">{cards}</div>
      </div>
    </div>
  );
}

export default App;
