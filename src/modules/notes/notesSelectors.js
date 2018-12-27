const getAllNotes = state => state.notes.data;

const getNoteById = (id, state) => state.notes.data.filter(currentItem => currentItem.id === id)[0];


export { getAllNotes, getNoteById };