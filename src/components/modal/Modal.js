import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { default as modalActions } from '../../modules/modal/modalAtions';
import { default as notesActions } from '../../modules/notes/data/notesDataActions'
import { getNoteById } from '../../modules/notes/notesSelectors';
import styles from './Modal.module.css';



class Modal extends Component {
    state = {
        text: this.props.curretNoteToEdit.text,
        title: this.props.curretNoteToEdit.title,
    };

    handleInputChange = e => {
        const { target } = e;
        const { value, name } = target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { text, title } = this.state;
        const { id, onItemEdit, handleCloseModal } = this.props;
        onItemEdit(id, title, text);
        handleCloseModal();
    }


    containerRef = createRef();
    render() {
        const { handleCloseModal, } = this.props;
        const { text, title } = this.state;
        return (
            <div className={styles.backDrop} ref={this.containerRef}>
                <p className={styles.closeUserModalBtn} onClick={() => handleCloseModal()}> X </p>
                <div className={styles.modalWindow}>
                    <form onSubmit={this.handleSubmit} className={styles.form}>
                        <h2>Edit Notes form</h2>
                        <label>
                            <span>Title:</span>
                            <input className={styles.formRow} value={title} onChange={this.handleInputChange}
                                type="text" name="title"></input>
                        </label>
                        <label>
                            <span>Text:</span>
                            <textarea cols="150" rows="10" value={text} className={styles.textArea} onChange={this.handleInputChange}
                                name="text"></textarea>
                        </label>
                        <div>
                            <button className={styles.btnSaveEdits}>Save Edits</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

const mstp = state => ({
    id: state.modalState.id,
    curretNoteToEdit: getNoteById(state.modalState.id, state),
});


const mdtp = {
    handleCloseModal: modalActions.CLOSE,
    onItemEdit: notesActions.EDIT,
};


export default connect(mstp, mdtp)(Modal);