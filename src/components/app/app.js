import React, { useState, useEffect } from 'react';
import CardContainer from '../card-container/card-container';
import Projects from '../projects/projects';
import Filter from '../filter/filter';

import data from '../../data/data.js';
import './app.styles.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [clicked, setClick] = useState({ clicked: false, keyword: [] });
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    const cardArray = data.data.map((cards, i) => <CardContainer key={i} cards={cards} setClick={setClick} clicked={clicked} filter={filter} />)
    setCards(cardArray);
  }, [clicked, filter]);

  return (
    <div className="Container">
      <div className="App">
        {filter.length > 0 && <span className='filterLabel'>{filter} on</span>}
        {cards}
        {clicked.clicked && <Projects setClick={setClick} clicked={clicked} />}
      </div>
      <div className="Footer">
        <h2>Filters</h2>
        {filter.length === 0 ? 
          <Filter filter={'locationFilter'} setFilter={setFilter} text='Indoor/Outdoor' /> 
          : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
          {filter.length === 0 ? 
          <Filter filter={'participantTypeFilter'} setFilter={setFilter} text='Team/Individual' /> 
          : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
      </div>
    </div>
  );
}

export default App;
