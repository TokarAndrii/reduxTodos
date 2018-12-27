import { combineReducers } from 'redux';
import notesReducer from './notes/notesReducer';
import usersReducer from './users/usersReducer';
import modalReducer from './modal/modalReducer';


export default combineReducers({
    notes: notesReducer,
    users: usersReducer,
    modalState: modalReducer,
});

