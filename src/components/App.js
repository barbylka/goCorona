import React from 'react';

import Header from './Header';
import Intro from './Intro';
import Features from './Features';
import Experts from './Experts';
import Healthcare from './Healthcare';
import Footer from './Footer';
import Popup from './Popup';
import ScrollTop from './ScrollTop';

function App() {
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);

  function openPopup() {
    setIsPopupOpened(true);
  }

  function closePopup() {
    setIsPopupOpened(false);
  }

  return (
    <div className='root'>
      <Header onPopup={openPopup} />
      <main>
        <Intro onPopup={openPopup} />
        <Features onPopup={openPopup} />
        <Experts onPopup={openPopup} />
        <Healthcare />
        <ScrollTop />
      </main>
      <Footer />
      <Popup isOpen={isPopupOpened} onClose={closePopup} />
    </div>
  );
}

export default App;
