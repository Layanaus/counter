import React from 'react'
import {Button} from 'react-bootstrap';
import { useState } from 'react';

    // const clickHandle = () => {
    //     console.log("My favourite color is Green ")
    // }
function Change() {
    const[Colour, setColour] = useState("Red");
    const clickHandle = () => {
        setColour("Green");
    }
  return (
    <div><h1 className='bg-warning text-white' >UseState Hook in React</h1>
    <h1>My favourite color is {Colour}</h1>
    <button type="button" class="btn btn-primary" onClick={clickHandle}>Change Color</button><br/>
    </div>
    
  )
}

export default Change