
import { Data } from "../Data";


export const reducer= (state, { type, payload }) => {
    if(type==='change_topic'){
    const newobj=Data.filter(x=>x.chapter===payload);
    
        return(
            {
                chapter:payload,
                vocab_sentence:newobj
            }
        )
    }
    throw new Error('no matching')

}
