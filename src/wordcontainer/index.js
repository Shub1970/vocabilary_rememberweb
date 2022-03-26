import React, {useState,useEffect} from "react";
import ChapterOptionBar from "../chapteroptionbar";
import  {Data}  from "../Data"
import Stringcont from "../stringcontainer";
import {WordCont} from "./wordcontainercss"
import { Word_style } from "./wordstyle";

const Wordcont=()=>{
    const [string, setString] = useState();
    const [chap,setchap]=useState([]);
    useEffect(() => {
        const arr=[];
        Data.map(({chapter,word_string})=>{
            arr.push(chapter);
            setchap(arr)
        })
    },[])
    return(
        <>
        <Stringcont {...{...string}} />
        <ChapterOptionBar props={[...chap]} />
        <WordCont>
        {
            Data.map((page)=>{
                const {chapter,word_string}=page;
                return(
                    <>
                    {
                        word_string.map((w_s)=>{
                            const {id,word,st}=w_s;
                        
                            return(
                                <Word_style type="button" onClick={()=>{
                                    setString({...w_s})
                                }}>
                                {word.charAt(0)}
                            </Word_style>
                                )
                            })
                        }
                    </>
                )
            }
            )
        }
        </WordCont>
        </>
        )
        }
export default Wordcont;