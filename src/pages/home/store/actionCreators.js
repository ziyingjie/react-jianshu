import * as constants from './constants';

import {
    fromJS
} from 'immutable';

import Axios from 'axios';


const getHomeTotal = (data) => ({
    type: constants.GET_HOME_TOTAL,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList),
})


const getArticle = (data, nextPage) => ({
    type: constants.GET_ARTICLE_MORE,
    articleList: fromJS(data),
    nextPage
})


export const changeScrollTop = (show) => ({
    type: constants.CHANGE_SCROLL_TOP,
    show
})

//有redux-thunk就可以在action中写函数  并且函数接收一个dispatch方法

export const getHomeDate = () => {
    return (dispatch) => {
        Axios.get('/api/home.json').then((res) => {
            const data = res.data;
            dispatch(getHomeTotal(data.obj))
        }).catch(() => {
            console.log('errow')
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        Axios.get(`/api/homeList.json?page=${page}`).then((res) => {
            const result = res.data;
            console.log(result);
            dispatch(getArticle(result.data, page + 1))
        }).catch(() => {
            console.log('errow')
        })
    }
}