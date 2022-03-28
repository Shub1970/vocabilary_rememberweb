import react, { createContext } from 'react';

const ReactContex=createContext();
export const useReactContex=()=>{
    return(
        react.useContext(ReactContex)
    )
}
export default ReactContex;