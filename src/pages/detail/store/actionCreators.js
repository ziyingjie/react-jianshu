import * as constants from './constants';

import Axios from 'axios';

const getContent = (result) => ({
    type: constants.GET_CONTENT,
    title: result.title,
    content: result.content
})

export const getDetail = (id) => {
    return (dispatch) => {
        Axios.get('/api/detail.json?id=' + id).then(
            (res) => {
                let result = res.data.data;
                dispatch(getContent(result));
            }
        ).catch((err) => {
            console.log('err')
        })
    }

}