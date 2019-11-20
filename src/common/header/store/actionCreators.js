import * as constants from './constants';

import {
    fromJS
} from 'immutable';

import Axios from 'axios';

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
//有redux-thunk就可以在action中写函数  并且函数接收一个dispatch方法

export const getList = () => {
    return (dispatch) => {
        console.log(123);
        Axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.arr))
        }).catch(() => {
            console.log('errow')
        })
    }
}