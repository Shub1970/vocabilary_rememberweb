import React from 'react'
import { Word_style } from './word_button_style'
import { useReactContex } from '../reactContex'

const Word = ({id,word,sentence}) => {
  const {state,Dispatch}=useReactContex();
  return (
    <Word_style onClick={()=>{Dispatch({type:"change_sentence",payload:sentence})}}>
      {word}
    </Word_style>
  )
}

export default Word