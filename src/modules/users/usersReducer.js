import { combineReducers } from 'redux';
import currentUserReducer from './currentUser/userReducer';
import usersDBReducer from './usersDB/usersDBReducer';

export default combineReducers({
    currentUser: currentUserReducer,
    usersDB: usersDBReducer,
});
