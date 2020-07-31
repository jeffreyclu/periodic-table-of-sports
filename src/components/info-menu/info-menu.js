import React from 'react';
import './info-menu.styles.css';
import enums from '../../data/enums';

const InfoMenu = ({ clicked, setClick }) => {
  let searchTerm = "https://source.unsplash.com/featured/?";
  clicked.keyword.forEach((word) => {
    searchTerm += `${word},`;
  })
  searchTerm = searchTerm.substring(0, searchTerm.length - 1)
  const dataArray = Object.entries(clicked.data).map(([key, value]) => {
    return (value && <p>{key}: {value}</p>)
  })
  return(
    <div className='InfoMenu'>
      <span className='x' onClick={() => setClick({ clicked: false, keyword: [] })}>X</span>
      <h2>{`${clicked.keyword.join(" ")}`}</h2>
      <img src={searchTerm} alt={`${clicked.keyword.join(" ")}`} />
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      {dataArray}
    </div>)
}

export default InfoMenu;
