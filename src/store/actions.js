import * as types from './types';

export const addUser = (user) => ({
    type: types.ADD_NEW_USER,
    payload: user
});

export const deleteUser = (userInfo) => ({
    type: types.DELETE_USER,
    payload: userInfo
});