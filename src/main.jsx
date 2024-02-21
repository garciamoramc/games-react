import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Memotest from './components/Memotest.jsx'
import WPM from './components/WPM.jsx'
import Pokemon from './components/Pokemon.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>} path='/'/>
        <Route element={<Memotest/>} path='/memotest'/>
        <Route element={<WPM/>} path='/wpm'/>
        <Route element={<Pokemon/>} path='/pokemon'/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
