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

      //CONDITIONALS!
      let title = $('<p>').html(movie.title).text(); //check for HTML code entities in title and convert to plain text
      if (title.endsWith(", The")) { //check for and correct title structure
        title = "The " + title.substring(0, title.length-5);
      }
      if (movie.Poster === "N/A") { //check for entries that have no poster image src, replace with my default
        movie.Poster = "http://i.imgur.com/ddETfiC.jpg";
      }
      if (movie.rating === "0") { //depending on the bechdel rating, give the correct icons and explanation
        movie.iconClassX = 'fa fa-times';
        movie.femSplain = "This movie doesn't even have two female characters.";
      } else if (movie.rating === "1") {
        movie.iconClass1 = 'fa fa-check green';
        movie.iconClass2 = 'fa fa-check grey';
        movie.iconClass3 = 'fa fa-check grey';
        movie.femSplain = "There are at least two female characters but they don't share any dialogue with each other.";
      } else if (movie.rating === "2") {
        movie.iconClass1 = 'fa fa-check green';
        movie.iconClass2 = 'fa fa-check green';
        movie.iconClass3 = 'fa fa-check grey';
        movie.femSplain = "There are at least two female characters who share dialogue with each other at some point in the film, but their only dialogue is about a man.";
      } else {
        movie.iconClass1 = 'fa fa-check green';
        movie.iconClass2 = 'fa fa-check green';
        movie.iconClass3 = 'fa fa-check green';
        movie.femSplain = "This movie passes all test criteria!";
      }

      return (
        <div key={index}>
          <div id="movieWrap">
            <h1>{title}</h1>
            <img id="movPic" src={movie.Poster} alt={title} />
            <p><span id="boldP">Genre</span>: {movie.Genre}</p>
            <p><span id="boldP">Release Date</span>: {movie.year}</p>
            <p><span id="boldP">Parental Rating</span>: {movie.Rated}</p>
            <p><span id="boldP">IMDB Rating</span>: {movie.imdbRating} / 10</p>
            <p><span id="boldP">Plot</span>: {movie.Plot}</p>
            <h3>Bechdel Score: {movie.rating} / 3</h3>
            <i className={movie.iconClassX} aria-hidden='true'></i>
            <i className={movie.iconClass1} aria-hidden='true'></i>
            <i className={movie.iconClass2} aria-hidden='true'></i>
            <i className={movie.iconClass3} aria-hidden='true'></i>
            <p id="femSplaining">{movie.femSplain}</p>
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
