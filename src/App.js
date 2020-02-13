import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
// Inside of your App.js file import { Route } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/'>Home</Route>
    <Route exact path='/about'>About</Route>
    <Route exact path='/contact'>Contact</Route>
  </div>
);

export default App;
