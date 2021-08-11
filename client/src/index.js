import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
// import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import BaseLayout from './Component/BaseLayout'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
        <BrowserRouter>
          <BaseLayout>
            <App />
          </BaseLayout>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);