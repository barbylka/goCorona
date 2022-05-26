import React from 'react';

import features from '../images/features.png';

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__container">
        <div className="features__image-container">
          <div className="features__boxes">
            <img className="features__image" alt="Screenshoot GoCorona App" src={features} />
          </div>
        </div>
        <div className="features__text">
          <h1 className="title">Stay safe with <span className="title_color_red">GoCorona.</span></h1>
          <p className="title__subtitle">24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.</p>
          <button className="button">Features</button>
        </div>
      </div>
    </section>
  )
}

export default Features;