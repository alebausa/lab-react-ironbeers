import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="card">
          <img src="https://assets3.thrillist.com/v1/image/676279/size/tmg-article_default_mobile.jpg" className="card-img-top" alt="beer bottles" />
          <div className="card-body">
            <Link to="/beers">All beers</Link>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div >
        <div className="card">
          <img src="https://assets3.thrillist.com/v1/image/676279/size/tmg-article_default_mobile.jpg" className="card-img-top" alt="beer bottles" />
          <div className="card-body">
            <Link to="/beers/random">Random beer</Link>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div >
        <div className="card">
          <img src="https://assets3.thrillist.com/v1/image/676279/size/tmg-article_default_mobile.jpg" className="card-img-top" alt="beer bottles" />
          <div className="card-body">
            <Link to="/new-beer">New beer</Link>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;