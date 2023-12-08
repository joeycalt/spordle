import React from 'react'
import { SpordleContext } from '../../App'
import { useContext } from 'react'

const Key = (props) => {

    const {guessTheWord , backspace , pressEnter} = useContext(SpordleContext)


    function handleClickForBig(){
        if(props.letter === "Enter"){
                pressEnter()
        }
        else {
            backspace()
        }
    }

    if(props.big) {

return (
    <button
    onClick={()=> handleClickForBig()}
    style={{
        width: 65.4,
        height: 58,
        margin: 3,
        borderRadius: 3,
        display: 'grid',
        placeItems: 'center',
        fontSize: 15,
        backgroundColor: 'gray',
        color: 'blue',
        fontFamily: 'Arial',
        cursor: 'pointer',
        border: 0,
        fontWeight: 'bold'
    }}>{props.letter}</button>
  )
    }
    return (
        <button
        onClick={()=> guessTheWord(props.letter)}
        style={{
            width: 43,
            height: 58,
            margin: 3,
            borderRadius: 3,
            display: 'grid',
            placeItems: 'center',
            fontSize: 15,
            backgroundColor: 'gray',
            color: 'blue',
            fontFamily: 'Arial',
            cursor: 'pointer',
            border: 0,
            fontWeight: 'bold'
        }}>{props.letter}</button>
      )


}

export default Key