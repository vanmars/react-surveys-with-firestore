import React from 'react';
import Header from './Header';
import SurveyControl from './SurveyControl';
import Signin from './Signin';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        
        <Route path='/signin'>
          <Signin />
        </Route>

        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        
        <Route path='/'>
          <SurveyControl />
        </Route>
        

      </Switch>
    </Router>
  );
}

export default App;