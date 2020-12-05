import React from 'react';
//import "font-awesome/css/font-awesome.min";
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HelpComponent from './components/HelpComponent'
import App from './App'
import {store} from './store'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

//import "../node_modules/bootstrap/dist/css/bootstrap.min";
//require('bootstrap');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavbarComponent />
      <Route exact path="/"><App /></Route>
      <Route path="/Help" component={HelpComponent}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
