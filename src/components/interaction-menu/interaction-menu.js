import React from 'react';

import './interaction-menu.styles.css';
import Filter from '../filter/filter';
import Sort from '../sort/sort';
import enums from '../../data/enums';

const InteractionMenu = ({ filter, setFilter, setSort }) => {
  return(
    <div className='InteractionMenu'>
      <div className='FilterContainer'>
        <h2>Filters</h2>
        <Filter filter={filter} newFilter={enums.professional} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.olympic} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.paralympic} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.college} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.youth} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.team} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.pool} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.openWater} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.indoor} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.outdoor} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.digital} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.winterSport} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.eSport} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.racing} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.crowdSize} setFilter={setFilter} />
        <Filter filter={filter} newFilter={enums.intensity} setFilter={setFilter} />
      </div>
             {/* <input
              className="react-switch-checkbox"
              id={`react-switch-new`}
              type="checkbox"
            />
            <label
              className="react-switch-label"
              htmlFor={`react-switch-new`}
            >
              <span className={`react-switch-button`} />
            </label>
            Filter */}
      <hr />
      <div className='FilterContainer'>
        <h2>Sort By</h2>
        <Sort sort={enums.type} setSort={setSort} />
        <Sort sort={enums.maxParticipants} setSort={setSort} />
        <Sort sort={enums.cost} setSort={setSort} />
        <Sort sort={enums.crowdSize} setSort={setSort} />
        <Sort sort={enums.contact} setSort={setSort} />
      </div>
    </div>
  )
}

export default InteractionMenu;
