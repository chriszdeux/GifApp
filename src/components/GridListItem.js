import React from 'react';
import '../styles/grid-list-item.css';

export const GridListItem = ({title, url}) => {
  return (
    <div className="image-card">
      <img src={url} alt={title}/>
      {/* <p>{title}</p> */}
    </div>
  )
}
