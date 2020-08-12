import React from 'react';
import './info-menu.styles.css';

/**
 * Info Menu component
 */
const InfoMenu = ({ clicked, setClick }) => {
  // let searchTerm = "https://source.unsplash.com/featured/?";
  // clicked.keyword.forEach((word) => {
  //   searchTerm += `${word},`;
  // })
  // searchTerm = searchTerm.substring(0, searchTerm.length - 1)
  const dataArray = Object.entries(clicked.data).map(([key, value],i) => {
    return (value && <p key={`info${i}`}>{key}: {value}</p>)
  })
  return(
    <div className='InfoMenu'>
      <span 
        className='x' 
        onClick={() => setClick({ clicked: false, keyword: [] })}>
        X
      </span>
      <h2>
        {`${clicked.keyword.join(" ")}`}
      </h2>
      {/* <img src={searchTerm} alt={`${clicked.keyword.join(" ")}`} /> */}
      {dataArray}
    </div>)
}

export default InfoMenu;
