import { connect } from 'react-redux';
import NotesEditor from './NotesEditorView';
import { default as notesActions } from '../../modules/notes/data/notesDataActions'


const mdtp = { ADD: notesActions.ADD };


export default connect(null, mdtp)(NotesEditor);