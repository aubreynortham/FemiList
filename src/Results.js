import React, { Component } from "react";
import $ from 'jquery';

class Results extends Component {

  render(){
    console.log("props: ", this.props);
    let {movies} = this.props;
    console.log("first poster", movies[0]["Poster"]);
    console.log("MOVIE # 0: ",movies[0]);
    console.log("MOVIE title: ",movies[0]["title"]);
    console.log("MOVIE Poster: ",movies[0]["Poster"]);

    //console.log("Keys", Object.keys(movies[0]));
    var stringified = JSON.parse(JSON.stringify(movies[0]));
    console.log("???: ", stringified);

    for(var prop in movies[0]){
      if(movies[0].hasOwnProperty(prop)){
      console.log("prop", prop);
    }
    else{
      console.log("What?!");
    }
    }


    let results = movies.map( (movie, index) => {
      console.log("HEY", movie);
      console.log("works: ", movie.title);
      console.log("huh?: ", movie.Poster);
      console.log("huh?: ", Object.keys(movie));


      let title = $('<p>').html(movie.title).text(); //check for HTML code entities in title and convert to plain text
      if (title.endsWith(", The")) { //check for and correct title structure
        title = "The " + title.substring(0, title.length-5)
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
    console.log("Results yo: ", results);
    return (
      <div>{results}</div>
    );
  }
}

export default Results;
