import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HelpComponent from './components/HelpComponent'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import URLShortenerComponent from './components/URLShortenerComponent';
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavbarComponent />
      <Route exact path="/"><URLShortenerComponent /></Route>
      <Route path="/Help" component={HelpComponent}/>
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);
