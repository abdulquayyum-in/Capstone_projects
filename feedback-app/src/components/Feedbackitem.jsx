import React from 'react'
import {useState} from "react"

function Feedbackitem() {  
    const [rating,setrating] = useState(7)
    const [text,settext] = useState("fwgfuiwrgfidgffeig")

  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">
            {text}
        </div>
      
    </div>
  )
}

export default Feedbackitem