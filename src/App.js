import './App.css'
import TheHeader from './header'
import HeroSection from './HeroSection'

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
