import { default as types } from './modalActionsTypes';

const OPEN = (id) => ({
    type: types.OPEN,
    payload: { isModalOpen: true, id: id },
});
const CLOSE = () => ({
    type: types.CLOSE,
    payload: {},
});

export default { OPEN, CLOSE }