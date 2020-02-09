import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Directory from './Pages/Directory/Directory';
import ForceInfopage from './Pages/ForceInfopage/ForceInfopage';
import LoadingContextProvider from './contexts/LoadingContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <LoadingContextProvider>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Directory />
            </Route>
            <Route path='/info/:id' exact>
              <ForceInfopage />
            </Route>
            <Redirect to='/' />
          </Switch>
          <Footer />
        </div>
      </Router>
    </LoadingContextProvider>
  );
}

export default App;
