import React, { useEffect, useState } from 'react'
import MainBlock from '../components/mainBlock/MainBlock'
import { tasks } from '../data'
import { Outlet } from 'react-router-dom'
import { getTodoes } from '../api'

const MainPage = ({user}) => {
    
    const [tasksList, setTasksList] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const [showError, setShowError] = useState(null)
    
    useEffect(()=>{
      getTodoes().then((tasksList)=>{setTasksList(tasksList.tasks)
      setIsLoading(false)})

      .catch((error)=>{
        setShowError(error.message)
        setIsLoading(false)
      })
      },[]) 
    


  return (
        <>
          <MainBlock tasksList={tasksList} isLoading={isLoading} setTasksList={setTasksList} showError={showError} user={user} />
          <Outlet />
        </>
  
  )
}

export default MainPage
