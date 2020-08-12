import React from 'react';

import './card.styles.css';
import enums from '../../data/enums';

/**
 * label component that can be hidden or not
 */
const Label = ({ text, hidden, selected }) => {
  const labelStyle = {
    className: 'Label',
  }
  if (hidden) {
    labelStyle.className += ' Hidden';
  }
  if (selected) {
    labelStyle.className += ' Selected';
  }
  return (<span className={labelStyle.className}>{text}</span>)
};

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

  switch(filter) {
    case (enums.team):
      filtered = data[enums.team] ? false : true;
      break;
    case (enums.olympic):
      filtered = data[enums.olympic] ? false : true;
      break;
    case (enums.professional):
      filtered = data[enums.professional] ? false : true;
      break;
    case (enums.paralympic):
      filtered = data[enums.paralympic] ? false : true;
      break;
    case (enums.youth):
      filtered = data[enums.youth] ? false : true;
      break;
    case (enums.college):
      filtered = data[enums.college] ? false : true;
      break;
    case (enums.pool):
      filtered = data[enums.pool] ? false : true;
      break;
    case (enums.openWater):
      filtered = data[enums.openWater] ? false : true;
      break;
    case (enums.indoor):
      filtered = data[enums.indoor] ? false : true;
      break;
    case (enums.outdoor):
      filtered = data[enums.outdoor] ? false : true;
      break;
    case (enums.digital):
      filtered = data[enums.digital] ? false : true;
      break;
    case (enums.winterSport):
      filtered = data[enums.winterSport] ? false : true;
      break;
    case (enums.eSport):
      filtered = data[enums.eSport] ? false : true;
      break;
    case (enums.racing):
      filtered = data[enums.racing] ? false : true;
      break;
    case (enums.location):
      filtered = data[enums.racing] ? false : true;
      break;
    case (enums.crowdSize):
      filtered = parseInt(data[enums.crowdSize]) > 3 ? false : true;
      break;
    case (enums.cost):
      filtered = parseInt(data[enums.cost]) > 3 ? false : true;
      break;
    case (enums.intensity):
      filtered = parseInt(data[enums.intensity]) > 8 ? false : true;
      break;
    default:
      break;
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
          selected={filter === enums.professional} />
        <Label 
          text={'Oly'} 
          hidden={data[enums.olympic] ? false: true}
          selected={filter === enums.olympic} />
        <Label 
          text={'Par'} 
          hidden={data[enums.paralympic] ? false: true} 
          selected={filter === enums.paralympic} />
        <Label 
          text={'Col'} 
          hidden={data[enums.college] ? false: true} 
          selected={filter === enums.college} />
        <Label 
          text={'Yth'} 
          hidden={data[enums.youth] ? false: true} 
          selected={filter === enums.youth} />
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
