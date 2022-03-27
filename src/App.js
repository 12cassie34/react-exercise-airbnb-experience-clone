import './App.css'
import TheHeader from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className="App">
      <TheHeader />
      <div className="content__container">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
