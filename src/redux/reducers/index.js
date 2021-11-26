import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'
import projects from './projectsReducer'
import deliveries from './deliveriesReducer'

export default combineReducers({
    auth,
    token,
    users,
    projects,
    deliveries,
    
})