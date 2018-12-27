import React from 'react';
import Note from '../note/Note';
import Modal from '../modal/Modal';

const NotesListView = ({ notes = [], onDelete = () => null, onEdit = () => null, onToggleCompleted = () => null,
    onModalOpen = () => null, isModalOpen, userName }) => (
        <div>
            {isModalOpen && (<Modal></Modal>)}
            {notes.map(note => (
                <div key={note.id}>
                    <Note {...note} onDelete={() => onDelete(note.id)}
                        onEdit={() => onEdit(note.id)} onToggleCompleted={() => onToggleCompleted(note.id)}
                        onModalOpen={() => onModalOpen(note.id)} userName={userName}
                    />
                </div>
            ))

            }

        </div>
    )


export default NotesListView;