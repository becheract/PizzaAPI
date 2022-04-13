import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route,Routes } from "react-router-dom";
//importing components
import Home from './components/Home/Home';
import Form from './components/GetYourPizza/Form';
import Orders from './components/Orders/Orders';
import NavBar from './components/NavBar/NavBar';
import 'flowbite';
ReactDOM.render(

  <React.StrictMode>
    {/* making the store available to the react component*/}
    <Provider store={store}>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/PizzaAPI/' element={<Home/>}> </Route>
        <Route path='/get-your-pizza' element={<Form/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
