import shortid from 'shortid';
import { default as notesDataActionsTypes } from './notesDataActionsTypes'

const ADD = (title, text, isCompleted) => ({
    type: notesDataActionsTypes.ADD,
    payload: { id: shortid(), title, text, isCompleted },
});

const TOGGLE_COMPLETED = id => ({
    type: notesDataActionsTypes.TOGGLE_COMPLETED,
    payload: id,
});

const DELETE = id => ({
    type: notesDataActionsTypes.DELETE,
    payload: id,
});

const EDIT = (id, title, text) => ({
    type: notesDataActionsTypes.EDIT,
    payload: { id, title, text, }
})


export default { ADD, TOGGLE_COMPLETED, DELETE, EDIT }