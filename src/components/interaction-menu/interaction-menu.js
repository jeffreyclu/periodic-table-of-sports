import React from 'react';

import './interaction-menu.styles.css';
import Filter from '../filter/filter';
import Sort from '../sort/sort';
import enums from '../../data/enums';

const InteractionMenu = ({ filter, setFilter, setSort }) => {
  return(
    <div className='Menu'>
      <h2>Filters</h2>
      {filter.length === 0 ? 
            <Filter filter={enums.professional} setFilter={setFilter} text={enums.professional} /> 
            : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
          {filter.length === 0 ? 
            <Filter filter={enums.olympic} setFilter={setFilter} text={enums.olympic} /> 
            : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
          {filter.length === 0 ? 
            <Filter filter={enums.paralympic} setFilter={setFilter} text={enums.paralympic} /> 
            : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
          {filter.length === 0 ? 
            <Filter filter={enums.college} setFilter={setFilter} text={enums.college} /> 
            : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
          {filter.length === 0 ? 
            <Filter filter={enums.youth} setFilter={setFilter} text={enums.youth} /> 
            : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
          {filter.length === 0 ? 
            <Filter filter={enums.team} setFilter={setFilter} text={enums.team} /> 
            : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
          {filter.length === 0 ? 
            <Filter filter={enums.crowdSize} setFilter={setFilter} text={'Large Crowds'} /> 
            : <Filter filter={''} setFilter={setFilter} text='Reset Filter' />}
      <hr />
      <h2>Sort</h2>
      <Sort sort={enums.type} setSort={setSort} />
      <Sort sort={enums.maxParticipants} setSort={setSort} />
      <Sort sort={enums.cost} setSort={setSort} />
      <Sort sort={enums.crowdSize} setSort={setSort} />
      <Sort sort={enums.contact} setSort={setSort} />
    </div>
  )
}

export default InteractionMenu;
