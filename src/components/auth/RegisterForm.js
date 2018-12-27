import React, { Component } from 'react';
import { connect } from 'react-redux';
import { default as userDBActions } from '../../modules/users/usersDB/usersDBActions';
import styles from './RegisterForm.module.css';

const INITIAL_STATE = {
    login: '',
    password: '',
    confirmPassword: '',
    name: '',
}


class RegisterForm extends Component {
    state = { ...INITIAL_STATE };

    handleInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { onRegister } = this.props;
        const { login, password, name, confirmPassword, } = this.state;

        if (password === confirmPassword) {
            onRegister(login, name, password);
            this.setState({ ...INITIAL_STATE })
        }

        else {
            alert('password and confirm password are not equals!!!!');
        }
    }
    render() {
        const { login, password, name, confirmPassword, } = this.state;



        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <h2>Register form</h2>
                <label className={styles.formRow}>
                    Login:
                    <input onChange={this.handleInputChange} type='text' name='login' value={login} ></input>
                </label>
                <label className={styles.formRow}>
                    Name:
                    <input onChange={this.handleInputChange} type='text' name='name' value={name} ></input>
                </label>
                <label className={styles.formRow}>
                    Password:
                    <input onChange={this.handleInputChange} type='password' name='password' value={password}></input>
                </label>
                <label className={styles.formRow}>
                    Confirm Password:
                    <input onChange={this.handleInputChange} type='password' name='confirmPassword' value={confirmPassword}></input>
                </label>
                <button className={styles.btn}>Register</button>
            </form>
        )
    }
};

const mdtp = {
    onRegister: userDBActions.REGISTER,
}



export default connect(null, mdtp)(RegisterForm);


