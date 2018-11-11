import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';

// import Thunk from 'redux-thunk';

// const store = compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore))
const createStoreWithMiddleware = applyMiddleware()(createStore);
import './style/main.scss';

import Layout from './components/layout';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Layout>

        </Layout>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
