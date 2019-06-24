import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

import '../index.css';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <Link to={`/movies/${movie.id}`}>
            <MovieDetails
              key={movie.id}
              movie={movie}
              addToSavedList={this.props.addToSavedList}
            />
          </Link>
        ))}
      </div>
    );
  }
}

function MovieDetails(props) {
  return (
    <MovieCard movie={props.movie} addToSavedList={props.addToSavedList} />
  );
}