import React from 'react';
import './filter.styles.css';

// const Filter = ({ filter, filterType, setFilter, text }) => (
//   <button className="filter" type="submit" onClick={() => {
//     return setFilter({ clicked: !filter.clicked, filterType: filter.clicked ? '' : filterType }); 
//   }}>{text}</button>
// )

const Filter =({ filter, newFilter, setFilter }) => {
  return(
    <>
      <label className='filter'>
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
