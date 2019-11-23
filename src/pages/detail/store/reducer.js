import * as constants from './constants';

import {
    fromJS
} from 'immutable';

//fromJS  会递归所有的值  并且转变成inmutable类型的对象
const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {

    if (action.type === constants.GET_CONTENT) {
        return state.merge({
            title: action.title,
            content: action.content
        })
    }
    return state;
}