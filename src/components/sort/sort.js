import React from 'react';

const Sort = ({ sort, setSort }) => {
  return (
    <button 
      className="filter" 
      type="submit" 
      onClick={() =>setSort(sort)}>{sort}</button>)
};

export default Sort;
