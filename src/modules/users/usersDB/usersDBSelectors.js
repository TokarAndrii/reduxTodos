const findUser = (state, login, password) => state.users.usersDB.find(item => { return (item.login === login && item.password === password) });

export default { findUser };