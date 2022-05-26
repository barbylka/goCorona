import React from 'react';
import Card from './Card';
import cards from '../utils/cards';

function Healthcare() {

  return (
    <section className="healthcare" id="contact">
      <h1 className="title"><span className="title_color_red">Healthcare</span> at your Fingertips.</h1>
      <p className="title__subtitle">Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.</p>
      <div className="healthcare__boxes">
        <ul className="healthcare__cards">
          {cards.map((card, index) => {
            return (
              <Card key={index}
                card={card}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Healthcare;