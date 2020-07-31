import React from 'react';

import './card.styles.css';
import enums from '../../data/enums';

/**
 * label component that can be hidden or not
 */
const Label = ({ text, hidden, selected }) => {
  const labelStyle = {
    className: 'label',
  }
  if (hidden) {
    labelStyle.className += ' hidden';
  }
  if (selected) {
    labelStyle.className += ' selected';
  }
  return (<span className={labelStyle.className}>{text}</span>)
};

const Card = ({ data, setClick, filter }) => {

  const cardStyle = {
    backgroundColor: "",
  };

  switch (data[enums.color]) {
    case ('Orange'):
      cardStyle.backgroundColor = 'orange';
      break;
    case ('Dark Blue'):
      cardStyle.backgroundColor = 'blue';
      break;
    case ('Grey') : 
      cardStyle.backgroundColor = 'grey';
      break;
    case ('Red'):
      cardStyle.backgroundColor = 'Red';
      break;
    case ('Light Blue'):
      cardStyle.backgroundColor = 'skyblue';
      break;
    case ('Green'):
      cardStyle.backgroundColor = 'Green';
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
    case (enums.crowdSize):
      filtered = parseInt(data[enums.crowdSize]) > 3 ? false : true;
      break;
    default:
      break;
  }

  const numParticipants = `${data[enums.minParticipants]} ${(data[enums.maxParticipants] - data[enums.minParticipants]) ? '-' + data[enums.maxParticipants] : ''}`;

  return(
    <div 
      className={filtered ? 'card filtered': 'card'} 
      style={cardStyle} 
      onClick={() => setClick({ 
        clicked: true, 
        keyword: 
        data[enums.sportName].split(" ") 
      })}>

      <div className="header">
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

      <div className='content'>
        <span className='symbol'>{data[enums.symbol]}</span>
        <span className="sport">{data[enums.sportName]}</span>
        <span className="participants">{numParticipants}</span>
        <span className="gender">{data[enums.gender]}</span>
      </div>

    </div>
  )
}

export default Card;
