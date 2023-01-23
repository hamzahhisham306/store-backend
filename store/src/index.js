import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import { Provider } from 'react-redux'
import Register from './components/Login/register/Register';
import ReactDOM from 'react-dom/client';
import { Route ,Routes  } from 'react-router-dom';
import {
  BrowserRouter
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import App from './App';
import Single from './store/single';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/signup"  element={<Register/>}/>
    <Route path="/single/:id"element={<Single/>}/>
      </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
