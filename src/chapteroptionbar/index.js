import React,{useEffect} from "react";
import { useReactContex } from "../reactContex";
import { Data } from "../Data";

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
    <label htmlFor="option">Chapter</label>
    
    <select name="option" onSelect={(e)=>{Dispatch({type:'chapter_change',payload:e.target.value})}} >
        {
            state.chapter.map((chapter)=>{
                return(
                    <option value={chapter}>{chapter}</option>
                )
            })
        }
    </select>
    </>
  )
}

export default ChapterOpt