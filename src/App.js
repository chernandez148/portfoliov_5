import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
