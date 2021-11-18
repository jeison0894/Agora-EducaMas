import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from '../auth/register/Register'
import ActivationEmail from '../auth/activationEmail/ActivationEmail'
import Login from '../auth/login/Login'
import ForgotPassword from '../auth/forgotPassword/ForgotPassword'
import ResetPassword from '../auth/resetPassword/ResetPassword'
import NotFound from '../../componentes/notFound/NotFound'
import Profile from '../auth/profile/Profile'
import EditUser from '../auth/profile/EditUser'

function Autentification () {
  const auth = useSelector(state => state.auth)
  const { isLogged, isAdmin } = auth
  return (
    <Router>
      <Routes>
        {/* <Route path="/cards" element={<Cards />} exact />
        <Route path="/ecosistemas" element={<Ecosistemas />} exact /> */}
        <Route
          path='/login'
          element={isLogged ? <NotFound /> : <Login />}
          exact
        />
        <Route path='/register' element={<Register />} exact />
        <Route path='/forgot_password' element={<ForgotPassword />} exact />
        <Route
          path='/user/reset/:token'
          element={isLogged ? <NotFound /> : <ResetPassword />}
          exact
        />
        <Route
          path='/user/activate/:activation_token'
          element={<ActivationEmail />}
          exact
        />
        <Route
          path='/profile'
          element={!isLogged ? <Profile /> : <NotFound />}
          exact
        />
        <Route
          path='/edit_user/:id'
          element={isAdmin ? <EditUser /> : <NotFound />}
          exact
        />
        <Route path='/create_user' element={<Register />} exact />
      </Routes>
    </Router>
  )
}
export default Autentification
