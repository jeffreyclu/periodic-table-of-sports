import React from 'react';

import Label from '../label/label';

import './card.styles.css';
import enums from '../../data/enums';

/**
 * Card component
 */
const Card = ({ data, setClick, filter }) => {

  const cardStyle = {
    backgroundColor: '',
  };

  switch (data[enums.color]) {
    case (enums.orange):
      cardStyle.backgroundColor = 'orange';
      break;
    case (enums.darkBlue):
      cardStyle.backgroundColor = 'blue';
      break;
    case (enums.grey) : 
      cardStyle.backgroundColor = 'grey';
      break;
    case (enums.red):
      cardStyle.backgroundColor = 'Red';
      break;
    case (enums.lightBlue):
      cardStyle.backgroundColor = 'skyblue';
      break;
    case (enums.green):
      cardStyle.backgroundColor = 'green';
      break;
    case (enums.purple):
      cardStyle.backgroundColor = 'purple';
      break;
    default:
      break;
  }

  let filtered;

  // loop through the filter object
  for (const [key, value] of Object.entries(filter)) {
    // if the filter value is true but the card data does not have the corresponding value, then filter it
    if (key === enums.crowdSize && value && parseInt(data[key]) < 3) {
      filtered = true;
    }
    else if (key === enums.intensity && value && parseInt(data[key]) < 8) {
      filtered = true;
    }
    else if (value && !data[key]) {
      filtered = true;
    }
  }

  // only show the max number of participants rather than the range
  const numParticipants = `${data[enums.minParticipants]} ${(data[enums.maxParticipants] - data[enums.minParticipants]) ? '-' + data[enums.maxParticipants] : ''}`;

  return(
    <div 
      className={filtered ? 'Card Filtered': 'Card'} 
      style={cardStyle} 
      onClick={() => setClick({ 
        clicked: true, 
        keyword: data[enums.sportName].split(" "),
        data: data,
      })}>

      <div className="Header">
        <Label 
          text={'Pro'} 
          hidden={data[enums.professional] ? false: true} 
          selected={filter[enums.professional]} />
        <Label 
          text={'Oly'} 
          hidden={data[enums.olympic] ? false: true}
          selected={filter[enums.olympic]} />
        <Label 
          text={'Par'} 
          hidden={data[enums.paralympic] ? false: true} 
          selected={filter[enums.paralympic]} />
        <Label 
          text={'Col'} 
          hidden={data[enums.college] ? false: true} 
          selected={filter[enums.college]} />
        <Label 
          text={'Yth'} 
          hidden={data[enums.youth] ? false: true} 
          selected={filter[enums.youth]} />
      </div>

      <div className='Content'>
        <span className='Symbol'>{data[enums.symbol]}</span>
        <span className="Sport">{data[enums.sportName]}</span>
        <span className="Participants">{numParticipants}</span>
        <span className="Gender">{data[enums.gender]}</span>
      </div>

    </div>
  )
}

export default Card;
