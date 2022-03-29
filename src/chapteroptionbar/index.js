import React,{useEffect} from "react";
import { useReactContex } from "../reactContex";
import { Data } from "../Data";
import { OptionBar } from "./optionbarcss";
const ChapterOpt = () => {
    const {state,Dispatch}=useReactContex();
    useEffect(() => {
        const tempchap=Data.map((page)=>{
            return (page.chapter)
                })
        Dispatch({type:"update_chapter",payload:tempchap})
    }, [])
    return (
        <>
    <OptionBar>
    <label htmlFor="option">Chapter</label>
    <select name="option" onChange={(e)=>{Dispatch({type:'chapter_change',payload:e.target.value})}} >
        {
            state.chapter.map((chapter)=>{
                return(
                    <option value={chapter}>{chapter}</option>
                    )
                })
            }
    </select>
    </OptionBar>
    </>
  )
}

export default ChapterOpt