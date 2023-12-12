import React, {useContext} from 'react'
import Grid from './Grid/Grid'
import Keyboard from './Keyboard/Keyboard'
import { SpordleContext } from '../App'

const Board = () => {
  const { resetGame } = useContext(SpordleContext);
  const {
    guessTheWord,
    pressEnter,
    completedRows,
    currentRow,
    word,
    guessWord,
    backspace
  } = useContext(SpordleContext);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-extrabold text-5xl m-4'>SPORDLE</h1>
      <Grid />
      <Keyboard />
       <button onClick={resetGame}>Reset Game</button>
    </div>
  )
}

export default Board