import React from "react";
import MyContext from "./MyContext";
import { useContext } from "react";


const MyComponent = ()=>{
    const sharedData = useContext(MyContext)


    return (
        <h1 style={{textAlign: "center"}}>{sharedData}</h1>
    )
}


export default MyComponent