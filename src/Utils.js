import $ from 'jquery'

export function queryOmdb (query) {
  var term = query.replace(/\s/, "+"); //replace white space characters with a "+"
  var url = "https://omdbapi.com?i="
  var bechurl = "https://cors-anywhere.herokuapp.com/http://bechdeltest.com/api/v1/getMoviesByTitle?title=" + term; //use this sorcery to
  return $.getJSON(bechurl).then(function(response){
      for (var i = 0; i < response.length; i++) { //loop through bech results
        let n = i; //define this variable to use block scope
        var bechId = "tt" + response[n]["imdbid"]; //get individual id
        console.log(url + bechId);
        //query individual id
        $.getJSON(url + bechId).then(function(response2){
          //set properties on response i.e.(Poster,genre,rated,plot)

          response[n].Poster = response2.Poster;
          response[n].Genre = response2.Genre;
          response[n].imdbRating = response2.imdbRating;
          response[n].Rated = response2.Rated;
          response[n].Plot = response2.Plot;
          //console.log("Poo", response[n]);
          //console.log(response2);
        })
      }

    // return $.getJSON(url).then(function(response2){
    //   console.log("Poop",response2);
    //   for (var i = 0; i < response.length; i++) { //loop first through bech responses
    //     for(var j = 0; j < response2.length; j++) { // then loop through the omdb responses
    //       //check for matching imdb ids (compare omdb responses to bech responses)
    //       if ("tt" + response[i]["imdbid"] === response2[j]["imdbID"]) {
    //         console.log("Match",response2[j]);
    //         response[i].Poster = response2[j].Poster;
    //         response[i].Genre = response2[j].Genre;
    //         response[i].imdbRating = response2[j].imdbRating;
    //         response[i].Rated = response2[j].Rated;
    //         response[i].Plot = response2[j].Plot;
    //       }
    //     }
    //   }
    //   console.log(response);
    //   return response; //return our Bech responses with poster property we just pulled in
    // })
    console.log(response);
    return response
  });
}
