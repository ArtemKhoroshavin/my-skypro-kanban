import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { paths } from './lib/constsns'
import MainPage from './pages/MainPage'
import RegisterPage from './pages/RegisterPage'
import ExitPage from './pages/ExitPage'
import LoginPage from './pages/LoginPage'
import CardPage from './pages/CardPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoutes from './components/routes/PrivateRoutes'

const AppRoutes = () => {

//  const [isAuth, setIsAuth] = useState(false)

const navigate = useNavigate()

 const [user, setUser] = useState(null)
 
 function createUser (newUser) {
    setUser(newUser)
    navigate(paths.MAIN)
 }

 function exitUser () {
    setUser(null)
    navigate(paths.LOGIN)
 }

    return (
        <>
            <Routes>

                <Route element={<PrivateRoutes user={user}/>}>
                    <Route path={paths.MAIN} element={<MainPage user={user}/>}>

                        <Route path={paths.EXIT} element={<ExitPage exitUser={exitUser}/>} /> 
                        <Route path={paths.CARD} element={<CardPage />} /> 

                    </Route>
                </Route>

        
                <Route path={paths.ERROR} element={<NotFoundPage />} />
                <Route path={paths.LOGIN} element={<LoginPage  createUser={createUser} />} />
                <Route path={paths.REGISTER} element={<RegisterPage createUser={createUser}/>} />

            </Routes>
        </>
    )

}

export default AppRoutes
