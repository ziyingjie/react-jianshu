import {
    fromJS
} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
});


export default (state = defaultState, action) => {
    console.log(action);

    if (action.type === constants.GET_HOME_TOTAL) {
        return state.merge({
            topicList: action.topicList,
            articleList: action.articleList,
            recommendList: action.recommendList
        })
    }
    return state;
}