import { Component } from 'react';

const INITIAL_STATE = {
    showLogIn: true,
    showRegister: false,
}

export default class FormTabs extends Component {
    state = { ...INITIAL_STATE };

    handleClickLogIn = e => {
        e.preventDefault();
        this.setState({ showLogIn: true, showRegister: false, })
    };


    handleClickRegister = e => {
        e.preventDefault();
        this.setState({ showLogIn: false, showRegister: true, })
    }


    render() {
        const { children } = this.props;
        const { showLogIn, showRegister } = this.state;

        return children({
            showLogIn,
            showRegister,
            handleClickLogIn: this.handleClickLogIn,
            handleClickRegister: this.handleClickRegister
        });
    }
}