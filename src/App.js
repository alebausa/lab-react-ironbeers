import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import BeerCatalog from './components/BeerCatalog';
import BeerDetail from './components/BeerDetail';
import BeerRandom from './components/BeerRandom';
import NewBeerForm from './components/NewBeerForm';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/">HOME</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeerCatalog} />
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/beers/random" component={BeerRandom} />
          <Route exact path="/new-beer" component={NewBeerForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
