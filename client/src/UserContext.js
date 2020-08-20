import React, {createContext, useState} from "react";


export const NavContext = createContext();


export const NavProvider = ({children}) => {
const [status, setStatus] = useState("");


return (
    <NavContext.Provider value = {{status, setStatus}} >
        {children}
    </NavContext.Provider>
)
}