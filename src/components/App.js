import React from 'react';
import Header from './Header';
import SurveyControl from './SurveyControl';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <SurveyControl />
        </Route>
        <SurveyControl />
      </Switch>
      <Header />
    </Router>
  );
}

export default App;