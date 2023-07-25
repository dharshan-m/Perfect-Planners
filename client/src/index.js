import React from 'react';
import ReactDOM from 'react-dom/client';

import { Route, Routes, BrowserRouter } from 'react-router-dom';



import App from './App';
import Login from './Component/Login';
import Home from './Component/Home';
// import Newuser from './Component/Signup';
import Signup from './Component/Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path='/' Component={App} />
      <Route path='/login' Component={Login}/>
      <Route path='/home' Component={Home}/>
      <Route path='/signup' Component={Signup}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
