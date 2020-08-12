import React from 'react';
import './sort-styles.css';

const Sort = ({ currentSort, newSort, setSort }) => {
  const sortStyle = {
    backgroundColor: '',
    color: '',
  }
  console.log(currentSort, newSort)
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
