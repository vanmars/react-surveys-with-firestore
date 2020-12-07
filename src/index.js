import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import { createStore } from 'redux';
// import { Provider  } from 'react-redux';
// import rootReducer from './reducers/index';

// const store = createStore(rootReducer);

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);