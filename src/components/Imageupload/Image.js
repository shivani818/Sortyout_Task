import React from 'react'
import { useRef } from "react";


const Image = () => {
    const hiddenFileInput = useRef(null);
    
  return (
    <div className='card'>
    <div>
    <button className='button' >+</button>
    <input type="file"
        ref={hiddenFileInput} style={{ display: "none" }}></input>
    </div>
    </div>
  )
}

export default Image
