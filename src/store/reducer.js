
//combineReducers不再用rudux里的，而是redux-immutable里的，这样combineReducers里的对象就是一个immutable对象
//https://www.cnblogs.com/superlizhao/p/9474859.html
import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
})

export default reducer