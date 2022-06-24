import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Components/auth/pages/Login/Login'
import { Register } from '../Components/auth/pages/Register/Register'
import { CalendarRouter } from './CalendarRouter'

export const AuthRouter = () => {
  return (
    <div>
        <Routes>
          
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/register' element={<Register/>}/>
          <Route path='auth/*' element={<Login/>}/>
          <Route path='/' element={<CalendarRouter/>}/>
        </Routes>
    </div>
  )
}
