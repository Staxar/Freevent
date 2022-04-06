import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import '../styles/index.scss'
import Welcome from '../components/Welcome'

function App() {
  return (
    <div>    
      <Header />
      <Welcome />
      <Footer />
    </div>
  )
}
export default App
