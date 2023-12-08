import { createContext, useState } from 'react';
import './App.css';
import Board from './components/Board';
import { teams } from './components/variables';
import _ from 'lodash'

export const SpordleContext = createContext()

function App() {

  const [word, setWord] = useState(_.sample(teams).toUpperCase())
  const [completedRows, setCompletedRows] = useState([])
  const [guessWord, setGuessWord] = useState([])
  const [currentRow, setCurrentRow] = useState(0)

  function guessTheWord(char){
    if(guessTheWord.length === 6) return
    setGuessWord(guessWord.concat(char))
  }

  function pressEnter(){
    if(currentRow > 6) return alert('You have unfortunately exhausted all your trials. Press refresh to try again. ')
    if(guessWord.length < 6) return
    if(!teams.includes(guessWord.toLowerCase())) return alert('word not found')
    if(guessWord == word) alert('congrats')

    setCurrentRow(currentRow+1)
    setCompletedRows([...completedRows, currentRow])
    setGuessWord('')

  }

  function backspace(){
    setGuessWord(guessWord.slice(0 , guessWord.length-1))
  }

  return (
    < SpordleContext.Provider value={{
      guessTheWord ,
       pressEnter ,
        completedRows ,
         currentRow, 
         word ,
         guessWord ,
          backspace 

    }} >
        <Board/>
    </ SpordleContext.Provider>
  );
}

export default App;
