import React from 'react';

import './label.styles.css';

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

export default Label;
