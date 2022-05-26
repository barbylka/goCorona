import React from "react";

function Popup({ isOpen, onClose }) {
  const ESC_CODE = "Escape";
  const popupClassName = `popup ${isOpen && "popup_opened"}`;

  React.useEffect(() => {
    const closeByEsc = (evt) => {
      if (evt.key === ESC_CODE) {
        onClose();
      }
    };
    document.addEventListener("keydown", closeByEsc);

    //disable body scroll

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", closeByEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen])

  return (
    <section className={popupClassName}>
      <div className="popup__container">
        <div className="popup__close" onClick={onClose}><div className="popup__close-button"></div></div>
        <h2 className="title"><span className="title_color_red">Wow!</span> Here you are!</h2>
        <p className="title__subtitle">There could have been interesting content here, but the designers didn't come up with it.</p>
        <button className="button" onClick={onClose}>Got it</button>
      </div>
    </section>
  )
}

export default Popup;