import React from 'react'
import {Routes as BrowserRouter , Route } from 'react-router-dom';
import './index.css'

import Navbar from './components/Navbar.jsx'
import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SettingPage from './Pages/SettingsPage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import { axiosInstance } from './lib/axios.js';
import { useAuth } from './store/useAuth.js';

const App = () => {
  const {authUser, checkAuth} = useAuth
  return (
    <>
    <Navbar  />
    <BrowserRouter>
      <Route path='/' element={<HomePage /> } />
      <Route path='/signup' element={<SignUpPage /> } />
      <Route path='/login' element={<LoginPage /> } />
      <Route path='/settings' element={<SettingPage /> } />
      <Route path='/profile' element={<ProfilePage /> } />
    </BrowserRouter>
    </>
  )
}

export default App
