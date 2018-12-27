import { combineReducers } from 'redux';
import notesDataReducer from './data/notesDataReducer';
import notesFilterReducer from './filter/notesFilterReducer';
import notesIsLoadingReducer from './isLoading/notesIsLoadingReducer';


const notesReducer = combineReducers({
    data: notesDataReducer,
    filter: notesFilterReducer,
    isLoading: notesIsLoadingReducer,
});

export default notesReducer;