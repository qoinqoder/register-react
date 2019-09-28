import { createStore } from 'redux';

const reducers = (state, action) => {
    switch(action.type) {
        case 'UPDATE_NAVIGATION':
            return {
                ...state,
                path: action.path
            }

        case 'SHOW_LOADING':
            return {
                ...state,
                loading: true
            }

        case 'LOAD_LIST':
            const users = action.users;
            return {
                ...state,
                users,
                nroUsers: action.nro,
                loading: false
            }

        case 'REMOVE_FROM_LIST':
            return {
                ...state,
                users: action.users,
                nroUsers: action.nro,
                loading: false
            }

        case 'SHOW_IN_LIST':
            return {
                ...state,
                users: action.user,
                loading: false
            }

        default:
            return state;
    }
}

export default createStore(
    reducers,
    /* REDUX-DEVTOOLS */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);