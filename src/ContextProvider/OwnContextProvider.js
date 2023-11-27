import { createContext, useEffect, useState } from "react"
import OwnComponent from "./OwnComponent"


export const myContext = createContext()
export const OwnContextProvide=()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
         console.log(data)
        });
    }, []);
    return(
        <myContext.Provider value={data}>
             <OwnComponent/>
        </myContext.Provider>
    )
}