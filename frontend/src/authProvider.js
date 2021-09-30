import {
    AUTH_GET_PERMISSIONS,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERROR,
    AUTH_CHECK,
}   from 'react-admin';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Home=()=> {
    history.push('/Home');
}

export default (type, params,props) => {

    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        if (username === 'admin' && password === 'password') {
            localStorage.setItem('role', 'admin');
            localStorage.removeItem('not_authenticated');
            Home();
            return Promise.resolve();
        }
        localStorage.setItem('not_authenticated', true);
        return Promise.reject();
    }

}