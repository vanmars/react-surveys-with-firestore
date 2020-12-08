import React from 'react';
import Header from './Header';
import SurveyControl from './SurveyControl';
import Sigin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/sigin'>
          <Sigin />
        </Route>
        <Route path='/'>
          <SurveyControl />
        </Route>
        <SurveyControl />
      </Switch>
    </Router>
  );
}

export default App;