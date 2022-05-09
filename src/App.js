import './App.css'
import TheHeader from './components/Header'
import HeroSection from './components/HeroSection'
import TheCard from './components/Card';

function App() {
  return (
    <div className="App">
      <TheHeader />
      <div className="content__container">
        <HeroSection />
        <TheCard />
      </div>
      
    </div>
  );
}

export default App;
