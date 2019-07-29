import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Memes from './components/Memes'
import NavBar from './components/NavBar'
import Users from './components/Users'
import User from './components/User'
import './App.css';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>   
          <Route exact path="/users" component={Users}/>
          <Route path="/users/:userId" component={User}/>
          <Route path="/memes/:memeId" component={Meme}/>       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
