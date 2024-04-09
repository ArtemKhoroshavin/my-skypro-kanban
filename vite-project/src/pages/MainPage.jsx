import React, { useEffect, useState } from 'react'
import MainBlock from '../components/mainBlock/MainBlock'
import { tasks } from '../data'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
    
    const [tasksList, setTasksList] = useState(tasks)

    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
    ,[])
    
  return (
        <>
          <MainBlock tasksList={tasksList} isLoading={isLoading} setTasksList={setTasksList}/>
          <Outlet />
        </>
  
  )
}

export default MainPage
