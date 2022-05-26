import React from "react";

function Card({ card }) {
  return (
    <li className="card">
      <img className="card__image" alt="Symptom" src={card.image} />
      <h3 className="card__title">{card.title}</h3>
      <p className="card__text">{card.text}</p>
    </li>
  )
}

export default Card;