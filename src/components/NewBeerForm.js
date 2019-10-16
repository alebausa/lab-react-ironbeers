import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewBeerForm extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  }

  handleNameChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      name: value,
    })
  }

  handleTaglineChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      tagline: value,
    })
  }

  handleDescriptionChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      description: value,
    })
  }

  handleBrewedChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      first_brewed: value,
    })
  }

  handleTipsChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      brewers_tips: value,
    })
  }

  handleAttenuationChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      attenuation_level: value,
    })
  }

  handleContributedChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      contributed_by: value,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    axios.post('https://ih-beer-api.herokuapp.com/beers/new', {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    })
      .then(response => {
        console.log(response);
        //No sé como hacer este redirect
        return (<Redirect to="/beers" />);
      })
      .catch(error => {
        console.log(error);
      })
  }

  //Se podría hacer un handleChange que sirviera para todos los inputs?
  //en plan this.setState({ event.target.name: event.target.value })
  //me suena que si pero no lo he encontrado

  render() {

    const { name, tagline, description, brewers_tips, contributed_by, first_brewed, attenuation_level } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={this.handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" value={tagline} onChange={this.handleTaglineChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" value={description} onChange={this.handleDescriptionChange} />
        </div>
        <div className="form-group">
          <label htmlFor="first-brewed">First brewed</label>
          <input type="text" name="first-brewed" value={first_brewed} onChange={this.handleBrewedChange} />
        </div>
        <div className="form-group">
          <label htmlFor="tips">Brewer's tips</label>
          <input type="text" name="tips" value={brewers_tips} onChange={this.handleTipsChange} />
        </div>
        <div className="form-group">
          <label htmlFor="attenuation">Attenuation level</label>
          <input type="number" name="attenuation" value={attenuation_level} onChange={this.handleAttenuationChange} />
        </div>
        <div className="form-group">
          <label htmlFor="contributed">Contributed by</label>
          <input type="text" name="contributed" value={contributed_by} onChange={this.handleContributedChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewBeerForm;