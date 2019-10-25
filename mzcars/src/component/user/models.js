
import { combineReducers } from 'redux';
import { createReducers, createActions } from '../../utils';
import { message } from 'antd';

const path = name => `user:${name}`;

const models = {
    list: {
        data: [],
        handlers: {
            get(state, action) {
                return action.payload;
            },
            add(state, action) {
                return [...action.payload, ...state];
            },
            del(state, action) {
                return state.filter(item => item.id !== action.payload);
            },
            update(state, action) {
                return state.map(item => (item._id === action.payload._id ? action.payload : item));
            },
        },
    },
    uiStatus: {
        data: {
            isLoading: false,
            isListShow: true,
            isAddShow: false,
        },
        handlers: {
            changeUiStatus(state, action) {
                return { ...state, ...action.payload };
            },
        },
    },
    info: {
        data: {},
        handlers: {
            login(state, action) {
                return action.payload;
            },
            logout() {
                return {};
            },
        },
    },
};

export const actions = createActions(models, path);
export default combineReducers(createReducers(models, path));
