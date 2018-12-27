import { default as types } from './modalActionsTypes'
const modalReducer = (modalState = { isModalOpen: false, id: null }, { type, payload }) => {
    switch (type) {
        case types.OPEN:
            return payload;
        case types.CLOSE:
            return payload;
        default: return modalState;
    }
}


export default modalReducer