import React from 'react'
import {Button} from 'react-bootstrap';
import {useState} from 'react';

const Counter = () => {
  const [Count, setCount] = useState(0);
    const clickHandle = () => {
        setCount(Count+1);
    }
    const clickDecrement = () => {
      if(Count==0){
        return
      }
      setCount(Count-1);    }
  return (
    <div>
        <div><h1> Counter is {Count}</h1>
    <button type="button" class="btn btn-success" onClick={clickHandle}>+</button><br/>
    <button type="button" class="btn btn-danger" style={{marginLeft:"100px",marginTop:"-65px"}} onClick={clickDecrement}>-</button><br/>
    </div>
    </div>
  )
}

export default Counter