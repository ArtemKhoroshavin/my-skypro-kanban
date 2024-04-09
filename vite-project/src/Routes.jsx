import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { paths } from './lib/constsns'
import MainPage from './pages/MainPage'
import RegisterPage from './pages/RegisterPage'
import ExitPage from './pages/ExitPage'
import LoginPage from './pages/LoginPage'
import CardPage from './pages/CardPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoutes from './components/routes/PrivateRoutes'

const AppRoutes = () => {

 const [isAuth, setIsAuth] = useState(false)

    return (
        <>
            <Routes>

                <Route element={<PrivateRoutes isAuth={isAuth}/>}>
                    <Route path={paths.MAIN} element={<MainPage />}>

                        <Route path={paths.EXIT} element={<ExitPage />} /> 
                        <Route path={paths.CARD} element={<CardPage />} /> 

                    </Route>
                </Route>

        
                <Route path={paths.ERROR} element={<NotFoundPage />} />
                <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>} />
                <Route path={paths.REGISTER} element={<RegisterPage />} />

            </Routes>
        </>
    )

}

export default AppRoutes
