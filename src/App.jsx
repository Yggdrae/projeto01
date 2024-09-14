import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import Config from './components/Config'

function App() {

  return (
    <div>
      <h1>Tela Principal</h1>
      <Nav />
      <div className='container'></div>
    </div>
  )
}

export default App
