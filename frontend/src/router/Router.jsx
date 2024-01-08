import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Tour from './../pages/Tour'
import TourDetails from './../pages/TourDetails'
import About from './../pages/About'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import Thankyou from '../pages/Thankyou'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'/home'} />}></Route>
        <Route path='/home' element={<Home />}/>
        <Route path='/tour' element={<Tour />}/>
        <Route path='/tours/:id' element={<TourDetails />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/thank-you' element={<Thankyou />}/>
        <Route path='/tours/search' element={<SearchResultList />}/>
    </Routes>
  )
}

export default Router