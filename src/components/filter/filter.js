import React from 'react';
import './filter.styles.css';

/**
 * Filter checkbox component
 */
const Filter =({ filter, newFilter, setFilter }) => {
  const newState = { ...filter };
  newState[newFilter] = !filter[newFilter];
  return(
    <>
      <label className='Filter'>
        <input 
          id={`${newFilter}Filter`}
          type='checkbox'
          checked={filter[newFilter]}
          onChange={() => setFilter(newState)} />
        {newFilter}
      </label>
    </>
  )
}

export default Filter;
