import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Login } from '../Components/auth/pages/Login/Login'
import { Register } from '../Components/auth/pages/Register/Register'

import { CalendarScreen } from '../Components/calendar/CalendarScreen'

import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const CalendarRouter = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <>
      
        <Routes>
            
           <Route
            path='/*'
            element={
              <PublicRoute isAuth={isLoggedIn}>
                <AuthRouter/>
              </PublicRoute>
            }
           />
          <Route
            path='/'
            element={
              <PrivateRoute isAuth={isLoggedIn}>
                <CalendarScreen/>
              </PrivateRoute>
            }
          />
        </Routes>       
    </>
  )
}
