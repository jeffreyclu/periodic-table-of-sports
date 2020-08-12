import React from 'react';
import './sort-styles.css';

/**
 * Sort button component
 */
const Sort = ({ currentSort, newSort, setSort }) => {
  const sortStyle = {
    backgroundColor: '',
    color: '',
  }
  // check if the sort is active
  if (currentSort === newSort) {
    sortStyle.backgroundColor = 'blue';
    sortStyle.color = 'white';
  };
  return (
    <button 
      style={sortStyle}
      className='sort' 
      type='submit' 
      onClick={() =>setSort(newSort)}>
        {newSort}
    </button>)
};

export default Sort;
