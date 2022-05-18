import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Login } from '../Components/auth/Login/Login'
import { Register } from '../Components/auth/Register/Register'

import { CalendarScreen } from '../Components/calendar/CalendarScreen'

export const CalendarRouter = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<CalendarScreen/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>

        </Routes>       
    </div>
  )
}
