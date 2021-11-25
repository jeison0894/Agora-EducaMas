import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  dispatchGetUser,
  dispatchLogin,
  fetchUser
} from './redux/actions/authAction'
import Autentification from './componentes/autentication/Autentification'
import Unification from './Unification'
import { dispatchGetAllStudents, fetchAllStudents } from './redux/actions/usersAction'
import { dispatchGetAllProjects, fetchAllProjects } from './redux/actions/projectsAction'
import { dispatchGetAllDeliveries, fetchAllDeliveries } from './redux/actions/deliveriesAction'


function App () {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAgoraUser')
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin && loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      const refreshtoken = user.refresh_token

      const getToken = async () => {
        const res = await axios.post(
          'http://localhost:3005/api/refresh_token',
          { refreshtoken }
        )
        dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
      }
      getToken()
    }
  }, [auth.isLogged, dispatch])

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin())
        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  }, [token, dispatch])

  useEffect(() => {
    if (auth.isTeacher) {
      fetchAllStudents(token).then(res => {
        dispatch(dispatchGetAllStudents(res))
      })
      fetchAllProjects(token).then(res => {
        dispatch(dispatchGetAllProjects(res))
      })
      fetchAllDeliveries(token).then(res => {
        dispatch(dispatchGetAllDeliveries(res))
      })
    }
  }, [token, auth.isTeacher, dispatch])

    

  return (
    <>
      
      <Unification />
    </>
  )
}

export default App
