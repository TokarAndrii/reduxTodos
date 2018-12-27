import { default as currentUserActionsTypes } from './usersActionsTypes'
const userReducer = (currentUser = { name: 'Unauth_User', login: '', password: '', }, { type, payload }) => {
    switch (type) {
        case currentUserActionsTypes.LOGIN:
            return currentUser = { ...payload };
        default: return currentUser;
    }
};

export default userReducer;