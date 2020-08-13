import React from 'react';
import shuffle from 'lodash/shuffle';

import './interaction-menu.styles.css';
import Filter from '../filter/filter';
import Sort from '../sort/sort';
import enums from '../../data/enums';

/**
 * Group by category checkbox component
 */
const CategoryGroupToggle = ({ categoryGroupToggle, setCategoryGroupToggle }) => (<>
  <label className='Filter'>
      <input 
        type='checkbox'
        checked={categoryGroupToggle}
        onChange={() => setCategoryGroupToggle(!categoryGroupToggle)}/>
      Group by Category
  </label>
</>);

/**
 * User interaction menu component
 */
const InteractionMenu = ({ cards, setCards, filter, setFilter, sort, setSort, categoryGroupToggle, setCategoryGroupToggle }) => {
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
        <h2>Horizontal Sort</h2>
        <CategoryGroupToggle categoryGroupToggle={categoryGroupToggle} setCategoryGroupToggle={setCategoryGroupToggle} />
        <Sort currentSort={sort} newSort={enums.type} setSort={setSort} />
        <Sort currentSort={sort} newSort={enums.maxParticipants} setSort={setSort} />
        <Sort currentSort={sort} newSort={enums.cost} setSort={setSort} />
        <Sort currentSort={sort} newSort={enums.crowdSize} setSort={setSort} />
        <Sort currentSort={sort} newSort={enums.contact} setSort={setSort} />
      </div>
      <hr />
      <div className='FilterContainer'>
        <h2>Shuffle</h2>
        <button type='submit' className='Sort' onClick={() => setCards(shuffle)}>Random Shuffle</button>
      </div>
    </div>
  )
}

export default InteractionMenu;
