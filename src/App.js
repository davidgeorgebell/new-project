import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Directory from './Pages/Homepage/Directory';
import ForceInfopage from './Pages/ForceInfopage/ForceInfopage';

function App() {
  return (
    <Router>
      <div className='App'>
        <main>
          <Switch>
            <Route path='/' exact>
              <Directory />
            </Route>
            <Route path='/info/name' exact>
              <ForceInfopage />
            </Route>
            <Redirect to='/' />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
