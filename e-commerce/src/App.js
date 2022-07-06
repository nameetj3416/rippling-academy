import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <div>
              <Header/>
              <Checkout/>
            </div>  
          </Route>
          <Route path='/login' element={ <h1>Login Page</h1>}/>
          <Route path='/'>
            <div>
              <Header/>
              <Home/>
            </div>
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
