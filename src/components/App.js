import Header from './Header';
import Intro from './Intro';
import Features from './Features';
import Experts from './Experts';
import Healthcare from './Healthcare';
import Footer from './Footer';

function App() {
  return (
    <div className="root">
      <Header />
      <main>
        <Intro />
        <Features />
        <Experts />
        <Healthcare />
      </main>
      <Footer />
    </div>
  );
}

export default App;
