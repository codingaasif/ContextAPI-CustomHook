import React from "react";
import './App.css'
// import Appp from './components/hooks/ContextHook2/Appp';
// import {OwnContextProvide} from './ContextProvider/OwnContextProvider'
// import OwnComponent from './ContextProvider/OwnComponent';
// import ChatCounter from "./components/ChatCounter/ChatCounter";
import Custom from "./components/hooks/CustomHook/Custom";


const App = () => {
  return (
    <div>

    <Custom/>
    {/* <ChatCounter/> */}
    {/* <Appp/> */}


    {/* <OwnContextProvide>
      <OwnComponent/>
    </OwnContextProvide> */}
      
    </div>
  )
}

export default App
