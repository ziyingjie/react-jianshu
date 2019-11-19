import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './store';

import { GlobalStyled } from './style.js';
import { GlobalFontStyled } from './statics/iconfont/iconfont';

import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <GlobalStyled />
        <GlobalFontStyled />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    )
  }
}
export default App;
