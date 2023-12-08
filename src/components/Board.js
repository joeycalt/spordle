import React from 'react'
import Grid from './Grid/Grid'
import Keyboard from './Keyboard/Keyboard'

const Board = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-extrabold text-5xl m-4'>SPORDLE</h1>
      <Grid />
      <Keyboard />
      <small className='m-5'>Refresh page to play again with new word!</small>
    </div>
  )
}

export default Board