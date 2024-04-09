import { useState } from 'react'
import './App.css'
import { tasks } from './data'
import { useEffect } from 'react'
import { GlobalStyle } from './components/Global.styled'
import AppRoutes from './Routes'




function App() {


  return (
    <>
      <GlobalStyle />

      <AppRoutes/>
   </>
  )
}

export default App
