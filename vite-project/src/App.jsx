import { useState } from 'react'
import './App.css'
import IsExit from './components/exit/IsExit'
import CreatedTask from './components/createdTask/CreatedTask'
import DataTask from './components/dataAboutTasks/DataTasks'
import Header from './components/header/Header'
import MainBlock from './components/mainBlock/MainBlock'
import CalendarContent from './components/calendar/Calendar'
import CardInfo from './components/mainBlock/CardInfo'

function App() {
  return (
    <>
      <Header/>
      <IsExit/>
      <CreatedTask/>
      <DataTask/>
      <MainBlock/>
      
   </>
  )
}

export default App
