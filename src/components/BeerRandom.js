import React, { Component } from 'react';
import axios from 'axios';

class BeerRandom extends Component {
  constructor() {
    super()
    this.state = {
      beer: "",
    }
  }


  componentDidMount() {
    axios.get(`https://ih-beer-api.herokuapp.com/beers/random}`)
      .then(beer => {
        console.log(beer.data.name);
        this.setState({ beer: beer.data })
      })
  }

  render() {

    const { beer } = this.state;

    return (
      <div className="card">
        <img className="card-img-top" src={beer.image_url} alt="beer default" />
        <h1>{beer.name}</h1>
        <h5>{beer.tagline}</h5>
        <p>First brewed: {beer.first_brewed}</p>
        <p>{beer.description}</p>
        <p>Attenuation level: {beer.attenuation_level}</p>
        <p>Contributed by: {beer.contributed_by}</p>
      </div>
    );
  }
}

export default BeerRandom;