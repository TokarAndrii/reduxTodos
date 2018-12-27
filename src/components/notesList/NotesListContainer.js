import { connect } from 'react-redux';
import NotesList from './NotesListView';
import { default as modalActions } from '../../modules/modal/modalAtions';
import { default as notesActions } from '../../modules/notes/data/notesDataActions'
import * as selectors from '../../modules/notes/notesSelectors'

const mstp = state => ({
    notes: selectors.getAllNotes(state),
    isModalOpen: state.modalState.isModalOpen,
    userName: state.users.currentUser.name,
});



const mdtp = {
    onToggleCompleted: notesActions.TOGGLE_COMPLETED,
    onDelete: notesActions.DELETE,
    onEdit: notesActions.EDIT,
    onModalOpen: modalActions.OPEN,
}



export default connect(mstp, mdtp)(NotesList);