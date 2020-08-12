import React, { useState } from 'react';
import Card from '../card/card';

import './card-container.styles.css';
import enums from '../../data/enums';



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
const PrimaryGroup = ({ primaryGroups, setClick, filter, sort }) => {
  const secondaryGroups = Object.values(primaryGroups)
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
  const [sortUp, setsortUp] = useState(true);

  const intensitySort = (a, b) => {
    const aIntensity = parseInt(a[enums.intensity]);
    const bIntensity = parseInt(b[enums.intensity]);
    if (sortUp) return (aIntensity - bIntensity);
    else return (bIntensity - aIntensity);
  }
  const cardArray = cards.sort(intensitySort).map((card, i) => {
    return (<Card
      key={`card${i}`} 
      data={card} 
      setClick={setClick} 
      filter={filter} />)
  });
  return(
    <div className="Container">
      {cardArray.length > 1 && <SortToggle sortUp={sortUp} setsortUp={setsortUp} />}
      {cardArray}
      <span className="ContainerType">{`${sort}: ${cards[0][sort]}`}</span>
    </div>
  );
}

const SortToggle = ({ sortUp, setsortUp }) => {
  return(
    <div onClick={() => setsortUp(!sortUp)} >
      <span className='SortToggle'>
        {sortUp ? 'Sorted by Intensity ↓' : 'Sorted by Intensity ↑'}
      </span>
    </div>
  )
}

export default CardContainer;
export {
  PrimaryGroup,
  SecondaryGroup,
}