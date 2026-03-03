import React from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Vid from './components/Vid'
import Sugg from './components/Sugg'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__body">
        <div className="app__main">
          <Vid />
        </div>
        <div className="app__sidebar">
          <Sugg />
        </div>
      </div>
    </div>
  )
}

export default App