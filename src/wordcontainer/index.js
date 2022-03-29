import { useReactContex } from "../reactContex";
import Word from "../word_button";
import { WordCont } from "./wordcontainercss";
const Wordcontainer=()=>{
    const {state,Dispatch}=useReactContex();
    return(
        <>
        <WordCont>
        {
            state.word_string.map((obj)=>{
                return(
                    <Word {...obj} />
                    )
                })
                
            }
        </WordCont>
        </>
        )
}
export default Wordcontainer;