import React from 'react'
import MyContextProvider from './Provider'
import MyComponent from './MyComponent'

const Appp = ()=> {
  return (
    <MyContextProvider>
        <MyComponent/>
    </MyContextProvider>
  )
}

export default Appp
