import React from 'react';
import ReactDOM from 'react-dom';
import SurveillanceSystem from './components/SurveillanceSystem';
import Homepage from './components/Homepage/Homepage';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Homepage}/>
      <Route path="/surveillance" component={SurveillanceSystem} onEnter={requireAuth} />
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
