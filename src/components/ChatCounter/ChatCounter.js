import React, { useState, useEffect } from 'react'

function ChatCounter() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
      console.log('Hello')
      if(count >= 1){
          document.title = `Chats (${count})`
      }else{
          document.title = `Chats (${count})`
      }
  }, [count])

    
    console.log('OutSide')
  return (
    <div style={{textAlign: 'center'}}>
        <h1>{count}</h1>
        <button style={{fontSize:'30px'}} onClick={()=> setCount(count + 1)}> Click😊 </button>
        <br/><br/>
        <button style={{fontSize:'30px'}} onClick={()=> setCount(count - 1)}> Click😭 </button> 
    </div>
  )
}

export default ChatCounter;