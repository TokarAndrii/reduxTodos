import { default as usersTypes } from './usersActionsTypes';
const LOGIN = (name, login, password, ) => ({
    type: usersTypes.LOGIN,
    payload: { name, login, password, },
});

export default { LOGIN };