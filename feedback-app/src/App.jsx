import './App.css'
import Header from './components/Header'
import Feedbackitem from './components/Feedbackitem'
import Feedbacklist from './components/Feedbacklist'
import { useState } from 'react'
import FeedbackData from './data/data'

function App() {
  const [feedback,setfeedback] = useState([FeedbackData])

  return (
    <>
     <Header />
     <div className="container">
      <Feedbacklist feedback={feedback}/>
     {/* <Feedbackitem/> */}
     </div>
     
    </>
  )
}

export default App
