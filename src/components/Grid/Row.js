import React from 'react'
import Tile from './Tile'
import { useState, useEffect } from 'react'

const Row = (props) => {
    const nums=[1,2,3,4,5,6]
  return (
    <div className='flex flex-row justify-center items-center'>
        {
            nums.map((item, index)=> (<Tile rowId={props.id} key={index} id={index} />))
        }
    </div>
  )
}

export default Row