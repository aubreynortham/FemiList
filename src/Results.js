import React, { Component } from "react";
import $ from 'jquery';

class Results extends Component {

  render(){
    let {movies} = this.props;
    for(var prop in movies[0]){
      if(movies[0].hasOwnProperty(prop)){
      } else {
        console.log("What?!");
      }
    }

    let results = movies.map( (movie, index) => {
      let title = $('<p>').html(movie.title).text(); //check for HTML code entities in title and convert to plain text
      if (title.endsWith(", The")) { //check for and correct title structure
        title = "The " + title.substring(0, title.length-5);
      }
      return (
        <div key={index}>
          <div id="movieWrap">
            <h1>{title}</h1>
            <img id="movPic" src={movie.Poster} alt={title} />
            <p>Genre: {movie.Genre}</p>
            <p>Released in {movie.year}</p>
            <p>Parental Rating: {movie.Rated}</p>
            <p>IMDB rating: {movie.imdbRating}</p>
            <p>Plot: {movie.Plot}</p>
            <h3>Bechdel Score: {movie.rating} / 3</h3>
          </div>
        </div>
      );
    });

    return (
      <div>{results}</div>
    );
  }
}

export default Results;
