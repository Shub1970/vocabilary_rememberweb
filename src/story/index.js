import React,{useReducer} from "react";
import Stringcontainer from "../stringcontainer"
import Chapteroptionbar from "../chapteroptionbar"
import Wordcontainer from "../wordcontainer";
import reducer from "../reducer";
import reactContex from "../reactContex";
const initialState={
    sentence:"snipt of story",
    topic:' ',
    chapter:[],
    word_string:[]
}
const Story = () => {
    const [state, Dispatch] = useReducer(reducer, initialState)
    const provideState={state,Dispatch}
return (
    <>
    <reactContex.Provider value={provideState}>
    <Stringcontainer />
    <Chapteroptionbar />
    <Wordcontainer />
    </reactContex.Provider>
    </>

)
}

export default Story