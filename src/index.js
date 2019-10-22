import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

// Styling
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
