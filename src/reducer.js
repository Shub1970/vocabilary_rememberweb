import React from "react";
import {Data} from "./Data"

const reducer = (state,{type,payload}) => {
    if(type==='change_chapter'){
        const newstring_word=Data.filter(x=>x.chapter===payload)
        return (
            {
                ...state,topic:payload,word_string:newstring_word.string_word
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