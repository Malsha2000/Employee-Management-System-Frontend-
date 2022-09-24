import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Components/AboutUs'
import Login from '../Components/LoginForm'
import AddEmployee from '../Pages/Employee/Add/index'
import UpdateEmployee from '../Pages/Employee/Update/index'
import EmployeeList from '../Pages/Employee/List/index'

const PageRoutes = () => {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
                <Route path='/employee/add' element={<AddEmployee/>}></Route>
                <Route path='/employee/update/:id' element={<UpdateEmployee/>}></Route>
                <Route path='/employee/all' element={<EmployeeList/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default PageRoutes