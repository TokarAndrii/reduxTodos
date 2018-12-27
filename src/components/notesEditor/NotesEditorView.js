import React, { Component } from 'react';
import styles from './NotesEditorView.module.css';

const INITIAL_STATE = {
    title: "",
    text: "",
}


export default class NotesEditorView extends Component {
    state = { ...INITIAL_STATE };

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { ADD } = this.props;
        const { title, text } = this.state;
        console.log(this.props, ' ADD')
        ADD(title, text);
        this.setState({ ...INITIAL_STATE });
    }

    render() {
        const { title, text } = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.label}>
                    <span>Title</span>
                    <input type="text" value={title} name="title" placeholder="input title" onChange={this.handleChange}></input>
                </label>
                <label className={styles.label}>
                    <span>Text</span>
                    <textarea cols="100" rows="10" value={text} name="text" placeholder="input text" onChange={this.handleChange}></textarea>
                </label>
                <button className={styles.btn}>ADD NOTE</button>
            </form>
        )
    }
}