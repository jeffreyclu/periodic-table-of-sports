import React, { useState, useEffect } from 'react';
import './app.styles.css';
import CardContainer from '../card-container/card-container';
import Projects from '../projects/projects';

import data from '../../data/data.js';

const App = () => {
  const [cards, setCards] = useState([]);
  const [clicked, setClick] = useState({ clicked: false, keyword: [] });
  useEffect(() => {
    const cardArray = data.data.map((cards, i) => <CardContainer key={i} cards={cards} setClick={setClick} clicked={clicked} />)
    setCards(cardArray);
  }, [clicked]);
  return (
    <div className="App">
      {cards}
      {clicked.clicked && <Projects setClick={setClick} clicked={clicked} />}
    </div>
  );
}

export default App;
