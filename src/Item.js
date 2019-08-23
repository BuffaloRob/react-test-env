import React from 'react';

const Item = ({ item, index }) => {
  
  return (
    <div className="Center">
      <ul>
        <li key={index}>{item}</li>
      </ul>
    </div>
  )
}

export default Item;