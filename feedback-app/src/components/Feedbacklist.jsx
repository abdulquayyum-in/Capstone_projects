import React from 'react'

function Feedbacklist({feedback}) {
    console.log(feedback);
    // if(!feedback || feedback.length == 0){
    //     return <p>No feedback displayed</p>
    // }
  return (
    <div className='feedback-list'>
       {console.table(feedback)}
       grbw
    </div>
  )
}

export default Feedbacklist