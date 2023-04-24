import { Slides } from './components/slides';
import { Header } from './components/header';
import { Hero } from './components/hero';
import './css/main.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Slides />
        <div style={{ height: 200 }}></div>
      </main>
    </>
  );
}

export default App;
