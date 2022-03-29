
import {StringCont} from "./stringcontainercss"
import { useReactContex } from "../reactContex";
const Stringcont=()=>{
    const {state,Dispatch}=useReactContex();
    return(
        <>
            <StringCont>
                {state.sentence}
            </StringCont>
        </>
    )
}
export default Stringcont;