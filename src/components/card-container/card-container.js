import React from 'react';
import Card from '../card/card';
import './card-container.styles.css';


/**
 * chunks an array
 */
const chunkArray = (array, chunkSize) => {
  const chunked = [];
  const numOfChunks = Math.ceil(array.length / chunkSize);
  for (let i = 0; i < numOfChunks; i += 1) {
    chunked.push(array.splice(0, chunkSize));
  }
  return chunked;
};

/**
 * group of cards based on color
 */
const ColorGroup = ({ colorGroups, setClick, filter, sort }) => {
  const secondaryGroups = Object.values(colorGroups)
    .map((secondaryGroups, i) => {
      return <SecondaryGroup 
        key={`secondaryGroup${i}`}
        secondaryGroups={secondaryGroups}
        setClick={setClick}
        filter={filter}
        sort={sort} />
    });
  return(
    <>
      {secondaryGroups}
    </>
  )
}

/**
 * groups of cards based on some secondary characteristic
 */
const SecondaryGroup = ({ secondaryGroups, setClick, filter, sort }) => {
  const chunkedGroups = chunkArray(secondaryGroups, 6);
  const cardContainerArray = chunkedGroups.map((cards, i) => {
    return (<CardContainer 
      key={`cardContainer${i}`}
      cards={cards} 
      setClick={setClick} 
      filter={filter}
      sort={sort} />)
  });
  return(
    <>
      {cardContainerArray}
    </>
  )
}

/**
 * vertical column of cards
 */
const CardContainer = ({ cards, setClick, filter, sort }) => {
  const cardArray = cards.map((card, i) => {
    return (<Card
      key={`card${i}`} 
      data={card} 
      setClick={setClick} 
      filter={filter} />)
  });
  return(
    <div className="container">
      {cardArray}
      <span className="type">{`${sort}: ${cards[0][sort]}`}</span>
    </div>
  );
}

export default ColorGroup;
