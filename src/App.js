import React from 'react';
import './App.css';
import Nav from './Nav.js';
import About from './About.js';
import Shop from './Shop.js';
import Card from './Card.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop} />
        <Route path="/card" component={Card} />
        </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)


export default App;
