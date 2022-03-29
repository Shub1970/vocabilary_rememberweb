import React from "react";
import {Data} from "./Data"

const reducer = (state,{type,payload}) => {
    if(type==='chapter_change'){
        const [newstring_word]=Data.filter(x=>x.chapter===payload)
        
        const {word_string:w_s}=newstring_word
        console.log(w_s)
        return (
            {
                ...state,topic:payload,word_string:w_s
            }
        )
    }
    else if(type=='update_chapter'){
        return(
            {...state,chapter:payload}
            )
    }
    else if(type=='change_sentence'){
        return(
            {
                ...state,sentence:payload
            }
        )
    }
    else{
        throw new Error(`type ${type} not found`)
    }
}

export default reducer