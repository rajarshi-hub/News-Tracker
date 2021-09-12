
import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './router.js';
import firebase from './firebase';
const App=(props) =>
{
  return(
  <BrowserRouter>
  <Router {...props}/>
  </BrowserRouter>)
}

firebase.auth().onAuthStateChanged((user)=>
{
  ReactDOM.render(<App user={user}/>,document.querySelector('#root'));
})