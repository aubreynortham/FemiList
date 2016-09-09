import $ from 'jquery'

export function queryOmdb (query) {
  var term = query.replace(/\s/, "+"); //replace white space characters with a "+"
  var url = "https://omdbapi.com?s=" + term;
  var bechurl = "https://cors-anywhere.herokuapp.com/http://bechdeltest.com/api/v1/getMoviesByTitle?title=" + term; //use this sorcery to
  return $.getJSON(bechurl).then(function(response){
    return $.getJSON(url).then(function(response2){
      for (var i = 0; i < response.length; i++) { //loop first through bech responses
        for(var j = 0; j < response2["Search"].length; j++) { // then loop through the omdb responses
          //check for matching imdb ids (compare omdb responses to bech responses)
          if ("tt" + response[i]["imdbid"] === response2["Search"][j]["imdbID"]) {
            response[i].Poster = response2["Search"][j].Poster
          }
        }
      }
      return response; //return our Bech responses with poster property we just pulled in
    })

  });
}
