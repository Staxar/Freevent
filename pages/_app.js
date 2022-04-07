import React from 'react'
import Header from '../components/Layout/Header'
import Home from '../components/Home'

import '../styles/index.scss'

function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />    
  )
}
export default App
