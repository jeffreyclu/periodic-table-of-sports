import React from 'react';
import Card from '../card/card';
import './card-container.styles.css';

const CardContainer = ({ cards, setClick, clicked }) => {
  const cardArray = cards.map((card) => <Card data={card} setClick={setClick} clicked={clicked} />);
  return(
    <div className="container">
      {cardArray}
    </div>
  );
}

export default CardContainer;
