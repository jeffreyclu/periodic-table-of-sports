import React from 'react';
import './filter.styles.css';

const Filter = ({ filter, setFilter, text }) => (
<button className="filter" type="submit" onClick={() => {
  return setFilter(filter); 
}}>{text}</button>
)

export default Filter;
