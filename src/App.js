import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

import { GlobalStyled } from './style.js';
import { GlobalFontStyled } from './statics/iconfont/iconfont';

import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <GlobalStyled />
        <GlobalFontStyled />
        <Provider store={store}>
          <div>
            <Header />
            <Router>
              <div>
                {/* exact的存在是严格匹配，去掉的话，访问/detail实际会渲染Home，detail两个组件 */}
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/detail' component={Detail}></Route>
              </div>
            </Router>
          </div>
        </Provider>
      </div>
    )
  }
}
export default App;
