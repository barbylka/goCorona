import React from "react";

const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const buttonClassName = `scroll-top ${(scrollPosition < 100) && 'scroll-top_hidden'}`;

  const handleUserPosition = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  }

  const goTop = () => {
    const top = document.querySelector('.header');

    window.scrollTo({
      left: 0,
      top: top,
      behavior: 'smooth'
    })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleUserPosition);
  })

  return (
    <div className={buttonClassName}>
      <button onClick={goTop} className='scroll-top__button' />
    </div>

  )
}

export default ScrollTop;