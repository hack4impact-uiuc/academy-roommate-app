import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
// import new components here!!
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(  
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <App {...props} />} />
        {/** Add new routes here!! */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
