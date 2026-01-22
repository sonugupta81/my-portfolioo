import React from 'react'
import "./card.css"

function Card({ title, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>

      <div className="hovercard">
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default Card;

