import React from 'react';
import './sort-styles.css';

const Sort = ({ sort, setSort }) => {
  return (
    <button 
      className="sort" 
      type="submit" 
      onClick={() =>setSort(sort)}>{sort}</button>)
};

export default Sort;
