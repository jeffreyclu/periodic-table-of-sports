import React from 'react';

import './card.styles.css';

const Label = ({ text }) => (<span className="label">{text}</span>);

const Card = ({ data, setClick, filter }) => {
  const {
    category,
    professional,
    paralympic,
    olympic,
    college,
    youth,
    symbol,
    sport,
    participants,
    gender,
    location,
    participantType,
  } = data;

  const cardStyle = {
    backgroundColor: `${category}`
  };

  let hidden;
  switch(filter) {
    case 'locationFilter':
      hidden = location === 'indoor' ? true : false;
      break;
    case 'participantTypeFilter':
      hidden = participantType === 'individual' ? true : false;
      break;
    default:
      hidden = false;
      break;
  }

  return(
    <div className={hidden ? "card hidden" : "card"} style={cardStyle} onClick={() => setClick({ clicked: true, keyword: sport.split(" ") })}>
      <div className="header">
        {professional && <Label text={"Pro"} />}
        {olympic && <Label text={"Oly"} />}
        {paralympic && <Label text={"Par"} />}
        {college && <Label text={"Col"} />}
        {youth && <Label text={"Yth"} />}
      </div>
      <div className="content">
        <span className="symbol">{symbol}</span>
        <span className="sport">{sport}</span>
        <span className="participants">{participants}</span>
        <span className="gender">{gender}</span>
      </div>
    </div>
  )
}

export default Card;
