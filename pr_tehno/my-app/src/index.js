import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {configureStore,combineReducers} from '@reduxjs/toolkit'

import authRedux from './Controllers/Redux/authRedux'
import bugRedux from './Controllers/Redux/bugRedux'
import userRedux from './Controllers/Redux/userRedux'

//Redux configure
const reducer=combineReducers({
  auth:authRedux,
  bugs:bugRedux,
  user:userRedux,
})

const store=configureStore({
  reducer 
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   
  <Provider store={store}>
 <App />
   </Provider>
);



