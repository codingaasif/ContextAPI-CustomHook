import React from "react";
import MyContext from "./MyContext";


const MyContextProvider = ({children}) =>{
    const sharedData = 'Hello from Context'


    return (
        <MyContext.Provider value = {sharedData}>
            {children}
        </MyContext.Provider>
    )
}


export default MyContextProvider