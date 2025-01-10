import { createContext, useState } from "react";
export const PersonIdContext= createContext()

//  eslint-disable-next-line react/prop-types
export const Personcontext =({children})=>{
    const [personId,setPersonid]=useState(0)
   
       return(
            <PersonIdContext.Provider value={{personId,setPersonid}} >
                {children}
            </PersonIdContext.Provider>
       )
}
