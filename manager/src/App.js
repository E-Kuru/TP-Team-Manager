import React from 'react';
import './App.css';
import Home from './Home';
import Teams from './Teams';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom';

function notFound () {
  return <h1>404 Page Not found</h1>
}

function App() {
  return (
    <div>
      <Router>
            <Switch>
                <Route exact path='/' component ={Home} />
                <Route path = '/Teams' component = {Teams}/>
                <Route component ={notFound} />
            </Switch>
        </Router>
    </div>
    
  );
}

export default App;
