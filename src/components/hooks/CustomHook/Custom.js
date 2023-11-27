import React, { useState } from 'react'
import useCustom from './useCustom'

function Custom() {

    const [count, setCount] = useState(0)

    //custom hook useCustom call
    useCustom(count)

    function decNum(){
      if(count > 0){
        setCount(count - 1)
      }else{
        setCount(0)
      }
    }

  return (
    <div style={{textAlign: 'center'}}>
        <h1>{count}</h1>
        <button style={{fontSize:'30px'}} onClick={()=> setCount(count + 1)}> Click👍 </button>
        <br/><br/>
        <button style={{fontSize:'30px'}} onClick={decNum}> Click👎 </button> 
    </div>
  )
}

export default Custom;