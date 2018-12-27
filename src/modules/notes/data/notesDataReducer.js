import types from './notesDataActionsTypes';


const notesDataReducer = (data = [], { type, payload }) => {
    switch (type) {
        case types.ADD:
            return [...data, payload];

        case types.TOGGLE_COMPLETED:
            return data.map(item => item.id === payload ? { ...item, isCompleted: !item.isCompleted } : item);

        case types.DELETE:
            return data.filter(item => item.id !== payload);
        case types.EDIT:
            return data.map(item => item.id === payload.id ? { ...item, title: payload.title, text: payload.text } : item)

        default: return data;
    }
};

export default notesDataReducer;