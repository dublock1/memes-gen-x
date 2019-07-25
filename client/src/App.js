import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Memes from './components/Memes'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Memes}/>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
