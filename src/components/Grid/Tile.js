import React from 'react'
import { useEffect, useState } from 'react'
import { SpordleContext } from '../../App'

const Tile = ({id, rowId}) => {

    const [letter, setLetter] = useState('')
    const [completed, setCompleted] = useState(true)
    const {guessWord , word , currentRow , completedRows} = React.useContext(SpordleContext)
    const [colors, setColors] = useState({back:'white', font:"blue"})
    
    const style = {
        backgroundColor: colors.back,
        color: colors.font
    }
    
    React.useEffect(()=>{   
        if(currentRow === rowId){
            setLetter(guessWord[id])
        }
        if(completedRows.includes(rowId) && completed){
            changeColors()
            setCompleted(false)
        }
       
    },[guessWord ,completedRows ])
    

    function changeColors(){
        const arrayWord = word.split('')
        if(arrayWord.includes(letter)){
            if (arrayWord[id]===letter){  
                return setColors({back:'lightgreen' , font:'white'})
            }
            return setColors({back:'gold', font:'white'})
        }
        return setColors({back:"grey" , font:"white"})
    }
  
    return (
    <div style={style} className = 'flex justify-center my-[2px] items-center w-[62px] h-[62px] border-2'>
        <p className= 'flex self-center mb-2 font-bold text-5xl'>{letter}</p>
    </div>
  )
}

export default Tile