// Row.js
import React from 'react';
import Tile from './Tile';

const Row = (props) => {
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <div className='flex flex-row justify-center items-center'>
      {nums.map((item, index) => (
        <Tile key={`${props.id}-${index}`} rowId={props.id} id={index} />
      ))}
    </div>
  );
};

export default Row;

