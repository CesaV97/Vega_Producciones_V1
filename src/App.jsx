import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Locations from './components/Locations';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Locations />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
