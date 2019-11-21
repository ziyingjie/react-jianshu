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