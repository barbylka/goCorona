import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);
  const burgerClassName = `header__navigation ${isBurgerOpened && "header__navigation_active"}`;
  const burgerOpenButtonClassName = `header__burger ${isBurgerOpened && "header__burger_hidden"}`;
  const burgerCloseButtonClassName = `${isBurgerOpened && "header__close header__close_visible"}`;

  function handleBurger() {
    setIsBurgerOpened(true);
  }

  function closeBurger() {
    setIsBurgerOpened(false);
  }

  return (
    <header className="header">
      <img className="logo logo_place_header" alt="logo" src={logo}/>
      <nav className={burgerClassName}>
        <ul className="header__menu">
          <li className="header__menu-item">HOME</li>
          <li className="header__menu-item">FEATURES</li>
          <li className="header__menu-item">SUPPORT</li>
          <li className="header__menu-item">CONTACT US</li>
        </ul>
      </nav>
      <button className="button button_place_menu">DOWNLOAD</button>
      <div className={burgerOpenButtonClassName} onClick={handleBurger}><span className="header__burger-span"></span></div>
      <div className={burgerCloseButtonClassName} onClick={closeBurger}></div>
    </header>
  )
}

export default Header;
