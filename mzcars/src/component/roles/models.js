
import { combineReducers } from 'redux';
import { createReducers, createActions } from '../../utils';
import { message } from 'antd';

const path = name => `roles:${name}`;

const models = {
    list: {
        data: [
            { name: "超级管理员", role: "全公司", key: 1 },
            { name: "管理员", role: "全公司", key: 2 },
            { name: "超级管理员", role: "全公司", key: 3 },
            { name: "管理员", role: "全公司", key: 4 },
            { name: "超级管理员", role: "全公司", key: 5 },
            { name: "管理员", role: "全公司", key: 6 },
            { name: "超级管理员", role: "全公司", key: 7 },
            { name: "管理员", role: "全公司", key: 8 },
            { name: "超级管理员", role: "全公司", key: 9 },
            { name: "管理员", role: "全公司", key: 10 },
            { name: "超级管理员", role: "全公司", key: 11 },
            { name: "管理员", role: "全公司", key: 12 },
        ],
        handlers: {
            get(state, action) {
                return action.payload;
            },
            add(state, action) {
                console.log(action.payload)
                return [...action.payload, ...state];
            },
            del(state, action) {
                return state.filter(item => item.key !== action.payload);
            },
            update(state, action) {
                return state.map(item => (item.key === action.payload.key ? action.payload : item));
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
    item: {
        data: {},
        handlers: {
            changeItems(state, action) {
                return action.payload;
            },
        },
    },
};

export const actions = createActions(models, path);
export default combineReducers(createReducers(models, path));
