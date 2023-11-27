import React, { useContext } from 'react'
import { myContext } from './OwnContextProvider';

const OwnComponent = () => {
    const data =useContext(myContext);
    console.log(data, 'result')
   

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>OwnComponent App</h1>
      {data?.map((item) => {
        return (
          <div style={{textAlign: 'center'}}>
            <h3>Id: {item.id}</h3>
            <h3>Name: {item.name} </h3>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Website: {item.website}</p>
            <p>Address: {item.address.city}</p>
          </div>
        );
      })}
    </div>
  )
}

export default OwnComponent
