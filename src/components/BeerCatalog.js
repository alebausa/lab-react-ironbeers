import React, { Component } from 'react';
import axios from 'axios';
import './BeerCatalog.css';
import { Link } from 'react-router-dom';

class BeerCatalog extends Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers/")
      .then(response => {
        this.setState({ beers: response.data })
      })
  }

  render() {
    return (
      <div className="card">
        {this.state.beers.map((beer) => {
          return (
            <div className="beer" key={beer._id}>
              <img className="card-img-top" src={beer.image_url} alt="beer icon" />
              <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <h6>{beer.contributed_by}</h6>
                <p className="card-text">{beer.tagline}</p>
                <button className="btn btn-primary"><Link to={`/beers/${beer._id}`}>Beer detail</Link></button>
              </div>
            </div>
          )
        })
        }
      </div >
    );
  }
}


export default BeerCatalog;