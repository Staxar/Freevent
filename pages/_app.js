import React from 'react'
import Header from '../components/Layout/Header'
import Home from '../components/Home'
import '../styles/index.scss'

function App() {
  return (
    <div>    
      <Header />
      <div className='main'>
      <Home />
      </div>
    </div>
  )
}
export default App
