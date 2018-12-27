import React from 'react';
import styles from './Note.module.css'

const Note = ({ title, text, isCompleted = false, onToggleCompleted, onDelete, onModalOpen, userName }) => (
    <div className={styles.note}>
        <h2 className={isCompleted ? styles.completed : null}>{title}</h2>
        <p className={isCompleted ? styles.completed : null}>{text}</p>
        <p>Author: {userName}</p>
        <label>
            <span>Completed:</span>
            <input type="checkbox" name="isCompleted"
                checked={isCompleted} onChange={onToggleCompleted}></input>
        </label>
        <button onClick={onModalOpen}>Edit</button>
        <button onClick={onDelete}>Delete</button>

    </div>
);

export default Note;