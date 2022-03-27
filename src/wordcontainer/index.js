import React, {useState,useEffect,useReducer,useContext} from "react";
// import ChapterOptionBar from "../chapteroptionbar";
import  {Data}  from "../Data"
import Stringcont from "../stringcontainer";
import {WordCont} from "./wordcontainercss"
import { Word_style } from "./wordstyle";
import {reducer}  from "./reducer";
import { OptionBar } from "../chapteroptionbar/optionbarcss";
const defaultstate={
    chapter:'',
    vocab_sentence:[]
}
const Funccontex=React.createContext();
const Wordcont=()=>{
    const [string, setString] = useState();
    const [chap,setchap]=useState([]);
    const [state, dispatch] = useReducer(reducer,defaultstate)
    const chapterchange=(topic)=>{
        return(dispatch({type:'change_topic',payload:topic}))
    }
    useEffect(() => {
        const arr=[];
        Data.map(({chapter,word_string})=>{
            arr.push(chapter);
            setchap(arr)
        })
    },[])
    return(
        <Funccontex.Provider value={{chapterchange}}>
        <>
        <Stringcont {...string} />
        <ChapterOptionBar props={[...chap]} />
        
        <WordCont>
            {
                state.vocab_sentence.map((obj)=>{
                    const {chapter,word_string}=obj;
                    return(
                        <>
                        {
                        word_string.map((inobj)=>{
                        return(
                            <Word_style type="button" onClick={()=>{
                                    setString({...inobj})
                                }}
                            >
                                {inobj.word}
                            </Word_style>
                        )})
                    }
                    </>
                    )
                })
                
            }
        </WordCont>
        </>
        </Funccontex.Provider>
        )
        
}

function ChapterOptionBar(prop) {
const [chapter,setChapter]=useState(' ')
const {chapterchange}=useContext(Funccontex);
useEffect(() => {
    chapterchange(chapter);
},[chapter])  
return (
    <OptionBar>
    <div>
        <label htmlFor="chapteroptionbar">Choose Chapter</label>
        <select  id="chapteroptionbar" onChange={(e)=>{
        setChapter(e.target.value)
        }}>
        {
            
            prop.props.map((chapter)=>{
            return(
                <option value={chapter}>{chapter}</option>
                )
            })
            }
        </select>
    </div>
    </OptionBar>
)
}
export default Wordcont;