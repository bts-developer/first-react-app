import React from "react";
import "./card-list.stayles.css";
import {Card} from "../card/card.component";

export const CardList = ({filteredMonster, imageList}) => (
  <div className="card-list">
    {
      filteredMonster.map(monster => (
      <Card key={`monster-${monster.id}`} monster={monster} image={imageList[monster.id]} />
    ))}
  </div>
);