import * as constants from './constants';

import {
    fromJS
} from 'immutable';
//fromJS  会递归所有的值  并且转变成inmutable类型的对象
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if (action.type === constants.CHANGE_LIST) {
        // return state.set('list', action.data).set('totalPage', action.totalPage);
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        })
    }
    if (action.type === constants.MOUSE_ENTER) {
        return state.set('mouseIn', true);
    }
    if (action.type === constants.MOUSE_LEAVE) {
        return state.set('mouseIn', false);
    }
    if (action.type === constants.CHANGE_PAGE) {
        return state.set('page', action.page);
    }
    return state;
}