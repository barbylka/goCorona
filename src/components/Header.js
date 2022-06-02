import React from 'react';
import logo from '../images/logo.svg';

function Header({ onPopup }) {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);
  const burgerClassName = `header__navigation ${isBurgerOpened && "header__navigation_active"}`;
  const burgerOpenButtonClassName = `header__burger ${isBurgerOpened && "header__burger_hidden"}`;
  const burgerCloseButtonClassName = `${isBurgerOpened && "header__close header__close_visible"}`;

  const handleClick = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
      behavior: 'smooth'
    })
  }

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
          <li className="header__menu-item">
            <a className='header__link' onClick={(e) => {
              closeBurger();
              handleClick(e)
            }} href="#main">
              HOME
            </a>
          </li>
          <li className="header__menu-item">
            <a className='header__link' onClick={(e) => {
              closeBurger();
              handleClick(e)
            }} href="#features">
              features
            </a>
          </li>
          <li className="header__menu-item">
            <a className='header__link' onClick={(e) => {
              closeBurger();
              handleClick(e)
            }} href="#support">
              support
            </a>
          </li>
          <li className="header__menu-item">
            <a className='header__link' onClick={(e) => {
              closeBurger();
              handleClick(e)
            }} href="#contact">
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
      <button className="button button_place_menu" onClick={onPopup}>DOWNLOAD</button>
      <div className={burgerOpenButtonClassName} onClick={handleBurger}><span className="header__burger-span"></span></div>
      <div className={burgerCloseButtonClassName} onClick={closeBurger}></div>
    </header>
  )
}

export default Header;
