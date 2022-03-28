import { useReactContex } from "../reactContex";
import Word from "../word_button";
const Wordcontainer=()=>{
    const {state,Dispatch}=useReactContex();
    return(
        <>
        <h1>hellow wordcontainer</h1>
        {
            state.word_string.map((obj)=>{
                const {id,word,sentence}=obj;
                return(
                        <Word props={sentence}>{word}</Word>
                )
            })
        }
        </>
        )
}
export default Wordcontainer;