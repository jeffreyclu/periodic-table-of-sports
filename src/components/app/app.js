import React, { useState, useEffect } from 'react';
import ColorGroup from '../card-container/card-container';
import InfoMenu from '../info-menu/info-menu';
import InteractionMenu from '../interaction-menu/interaction-menu';

import './app.styles.css';
import * as newData from '../../data/data.json';
import enums from '../../data/enums';
import UpArrow from './long-arrow-pointing-up.svg';


const App = () => {
  const [cards, setCards] = useState([]);
  const [clicked, setClick] = useState({ clicked: false, keyword: [], data: {} });
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState(enums.type);
  
  useEffect(() => {
    const intensitySorted = newData.data.sort(intensitySort);
    const colorGrouped = groupBy(intensitySorted, enums.color);
    const secondaryGrouped = Object.values(colorGrouped).map((colorGroup) => groupBy(colorGroup, sort));
    const cardArray = Object.values(secondaryGrouped)
      .map((colorGroups, i) => <ColorGroup 
        key={`card${i}`}
        colorGroups={colorGroups}
        setClick={setClick}
        clicked={clicked}
        filter={filter}
        sort={sort}
      />)
    setCards(cardArray);
  }, [clicked, filter, sort]);
  
  const groupBy = (array, key) => {
    return array.reduce((acc, curr) => {
      (acc[curr[key]] = acc[curr[key]] || []).push(curr);
      return acc;
    }, {});
  }

  const intensitySort = (a, b) => {
    const aIntensity = parseInt(a[enums.contact]) + parseInt(a[enums.cost]) + parseInt(a[enums.crowdSize]);
    const bIntensity = parseInt(b[enums.contact]) + parseInt(b[enums.cost]) + parseInt(b[enums.crowdSize]);
    return (aIntensity - bIntensity);
  }

  return (
    <div className="AppContainer">
      <h1>Periodic Table of Sports</h1>
      <div className="App">
        <InteractionMenu 
          filter={filter} 
          setFilter={setFilter} 
          setSort={setSort} />
        <div className='CardContainer'>
          {filter.length > 0 && <span className='FilterLabel'>{filter} filter on</span>}
          {cards}
          {clicked.clicked && <InfoMenu setClick={setClick} clicked={clicked} />}
        </div>
      </div>
    </div>
  );
}

export default App;
