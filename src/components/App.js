import Header from './Header';
import Intro from './Intro';
import Features from './Features';

function App() {
  return (
    <div className="root">
      <Header />
      <main>
        <Intro />
        <Features />
      </main>
    </div>
  );
}

export default App;
