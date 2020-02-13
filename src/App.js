import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
// Inside of your App.js file import { Route } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/contact' component={Contact}/>
  </div>
);

export default App;
