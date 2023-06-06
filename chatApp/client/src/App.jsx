import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

import Abc from './pages/Homepage';

function App() {

  return (
    <>
      <div className="App">
      <Routes>
          <Route path="/" element={<Abc/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
