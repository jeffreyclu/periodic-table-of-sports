import React from 'react';

import './legend.styles.css';

/**
 * Legend component
 */
const Legend = ({ filter, setFilter, categoryGroupToggle, setCategoryGroupToggle }) => {
  const colors = [['orange', 'Club & Stringed'], ['blue', 'Accuracy'], ['green', 'Combat & Weightlifting'], ['grey', 'Performative'], ['red', 'Racing'], ['skyblue', 'Team'], ['purple', "eSports"]];

  const legendCards = colors.map((color, i) => <div key={`card${i}`} className="LegendCard" style={{ backgroundColor: color[0] }} onClick={() => setFilter(filter === color[0] ? '' : color[0])}><span className='LegendText'>{color[1]}</span></div>)
  return (
    <div className='Legend'>
      <div className='LegendCard'><span className='LegendText'>Categories:</span></div>
      {legendCards}
    </div>
  );
}

export default Legend;
