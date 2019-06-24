import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import './index.css';
import movies from './movies.jpg';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <img className="parallax" src={movies} alt="Movie Theater" />
        <SavedList list={this.state.savedList} />

        <Route
          exact
          path="/"
          render={props => (
            <MovieList {...props} addToSavedList={this.addToSavedList} />
          )}
        />

        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
