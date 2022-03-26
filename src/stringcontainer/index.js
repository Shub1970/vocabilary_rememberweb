import React from "react";
import {StringCont} from "./stringcontainercss"
const Stringcont=(prop)=>{
    return(
        <>
            <StringCont>
                {prop.sentence}
            </StringCont>
        </>
    )
}
export default Stringcont;