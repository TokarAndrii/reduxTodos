import React, { Component } from 'react';
import NotesList from './notesList/NotesListContainer';
import NotesEditor from './notesEditor/NotesEditorContainer';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';
import FormTabs from './auth/FormTabs';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          Todo App
        </header>
        <NotesEditor />
        <NotesList />
        <FormTabs>
          {
            ({ showLogIn, showRegister, handleClickLogIn, handleClickRegister }) => (
              <div className={styles.formTabs}>
                <button onClick={handleClickLogIn} className={!showLogIn ? styles.disabledBtn : styles.btn}>Log In</button>
                <button onClick={handleClickRegister} className={!showRegister ? styles.disabledBtn : styles.btn}>Register</button>
                {showLogIn && (<LoginForm />)}
                {showRegister && (<RegisterForm />)}
              </div>
            )

          }
        </FormTabs>

      </div>
    );
  }
}



export default App;
