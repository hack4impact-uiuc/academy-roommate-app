import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
<<<<<<< HEAD
import Profile from './pages/Profile';
=======
// import new components here!!
>>>>>>> main
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
<<<<<<< HEAD
        <Route exact path="/profile" render={(props) => <Profile {...props} />} />
        
=======
        {/** Add new routes here!! */}
>>>>>>> main
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
