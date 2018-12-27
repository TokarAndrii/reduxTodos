import { default as usersDBActionsTypes } from './usersDBActionsTypes';
const usersDBReducer = (usersDB = [], { type, payload }) => {
    switch (type) {
        case usersDBActionsTypes.REGISTER:
            return [...usersDB, { ...payload }];

        default: return usersDB;
    }
};

export default usersDBReducer;