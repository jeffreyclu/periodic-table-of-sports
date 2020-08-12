import React from 'react';
import './filter.styles.css';

/**
 * Filter checkbox component
 */
const Filter =({ filter, newFilter, setFilter }) => {
  return(
    <>
      <label className='Filter'>
        <input 
          type='checkbox'
          checked={filter === newFilter}
          onChange={() => setFilter(filter === newFilter ? '' : newFilter)}/>
        {newFilter}
      </label>
    </>
  )
}

export default Filter;
