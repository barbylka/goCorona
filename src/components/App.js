import Header from './Header';
import Intro from './Intro';
import Features from './Features';
import Experts from './Experts';

function App() {
  return (
    <div className="root">
      <Header />
      <main>
        <Intro />
        <Features />
        <Experts />
      </main>
    </div>
  );
}

export default App;
