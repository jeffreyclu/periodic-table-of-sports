import React from 'react';
import Card from '../card/card';
import './card-container.styles.css';

const CardContainer = ({ cards, setClick, filter }) => {
  const cardArray = cards.map((card) => <Card data={card} setClick={setClick} filter={filter} />);
  return(
    <div className="container">
      {cardArray}
    </div>
  );
}

export default CardContainer;
