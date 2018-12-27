import React, { Component } from 'react';
import { connect } from 'react-redux';
import { default as currentUserActions } from '../../modules/users/currentUser/usersActions';
import styles from './LoginForm.module.css';


const INITIAL_STATE = {
    login: '',
    password: '',
}


class LoginForm extends Component {
    state = { ...INITIAL_STATE };

    handleInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    handleCheckIfUserExist = (login, password) => {
        const { users } = this.props;
        return users.find(item => { return item.login === login })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { login, password } = this.state;

        const isExist = this.handleCheckIfUserExist(login, password);

        if (isExist) {
            const { onLogIn } = this.props;
            const { login, name, password } = isExist;
            onLogIn(name, login, password);
            this.setState({ ...INITIAL_STATE });
        }

        else {
            alert('no such user!!!!')
        };

    }

    render() {
        const { login, password } = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <h2>Log In form</h2>
                <label className={styles.formRow}>
                    Login:
                    <input onChange={this.handleInputChange} type='text' name='login' value={login} ></input>
                </label>
                <label className={styles.formRow}>
                    Password:
                    <input onChange={this.handleInputChange} type='password' name='password' value={password}></input>
                </label>
                <button className={styles.btn}>Log In</button>
            </form>
        )
    }
};

const mstp = state => ({
    users: state.users.usersDB,
});

const mdtp = {
    onLogIn: currentUserActions.LOGIN,
}


export default connect(mstp, mdtp)(LoginForm);




