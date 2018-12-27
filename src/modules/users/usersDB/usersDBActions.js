import shortid from 'shortid';
import { default as usersDBActionsTypes } from './usersDBActionsTypes'

const REGISTER = (login, name, password) => ({
    type: usersDBActionsTypes.REGISTER,
    payload: { id: shortid(), login, name, password },
});



export default { REGISTER, };