import React from 'react';
import logo from '../images/logo.svg';

function Header({ onPopup }) {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);
  const burgerClassName = `header__navigation ${isBurgerOpened && "header__navigation_active"}`;
  const burgerOpenButtonClassName = `header__burger ${isBurgerOpened && "header__burger_hidden"}`;
  const burgerCloseButtonClassName = `${isBurgerOpened && "header__close header__close_visible"}`;

  function handleBurger() {
    setIsBurgerOpened(true);
    document.body.style.overflow = "hidden";
  }

  function closeBurger() {
    setIsBurgerOpened(false);
    document.body.style.overflow = "unset";
  }

  return (
    <header className="header">
      <img className="logo logo_place_header" alt="logo" src={logo} />
      <nav className={burgerClassName}>
        <ul className="header__menu">
          <a onClick={closeBurger} className="header__menu-item" href="#intro"><li>HOME</li></a>
          <a onClick={closeBurger} className="header__menu-item" href="#features"><li>FEATURES</li></a>
          <a onClick={closeBurger} className="header__menu-item" href="#support"><li>SUPPORT</li></a>
          <a onClick={closeBurger} className="header__menu-item" href="#contact"><li>CONTACT US</li></a>
        </ul>
      </nav>
      <button className="button button_place_menu" onClick={onPopup}>DOWNLOAD</button>
      <div className={burgerOpenButtonClassName} onClick={handleBurger}><span className="header__burger-span"></span></div>
      <div className={burgerCloseButtonClassName} onClick={closeBurger}></div>
    </header>
  )
}

export default Header;
