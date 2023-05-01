import { Slides } from './components/slides';
import { Header } from './components/header';
import { Hero } from './components/hero';
import GMap from './components/map';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import './css/main.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Slides />
        <AboutUs />
        <GMap />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
