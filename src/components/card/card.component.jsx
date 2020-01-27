import React from "react";
import './card.styles.css'
import './image.styles.css'

export const Card = props => (
  <div className="card-container">
    <img
      alt={props.monster.name}
      className="image-container"
      src={`http://bts-co.com/img/onlineshop/category/${props.image}.jpg`}
      //src={`https://robohash.org/1${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p>{props.monster.email}</p>
  </div>
);
