import {
    fromJS
} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showTop: false
});


export default (state = defaultState, action) => {
   // console.log(action);
    if (action.type === constants.GET_HOME_TOTAL) {
        return state.merge({
            topicList: action.topicList,
            articleList: action.articleList,
            recommendList: action.recommendList
        })
    }
    if (action.type === constants.GET_ARTICLE_MORE) {
        return state.merge({
            articlePage: action.nextPage,
            articleList: state.get('articleList').concat(action.articleList)
        })
    }
    if (action.type === constants.CHANGE_SCROLL_TOP) {
        return state.set('showTop', action.show)
    }
    return state;
}