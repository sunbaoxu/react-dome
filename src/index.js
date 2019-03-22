import React from 'react';
import ReactDOM from 'react-dom';
//将所有方法给预一个store的别名方面在不同组件中调用
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './index.scss';
import App from '$App';


ReactDOM.render(
    <Router basename="/h5-bang">
      <App />
    </Router>
  , 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
