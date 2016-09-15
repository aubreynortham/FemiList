import $ from 'jquery'
var calls = {}
calls.queryOmdb = function(query) {
  var term = query.replace(/\s/, "+"); //replace white space characters with a "+"
  var url = "https://omdbapi.com?i="
  var bechurl = "https://cors-anywhere.herokuapp.com/http://bechdeltest.com/api/v1/getMoviesByTitle?title=" + term; //use this sorcery to
  return $.getJSON(bechurl).then(function(response){



    var stringified = JSON.parse(JSON.stringify(response[0]));

    console.log("String in utils", stringified);
    console.log("original request:", response);
    return response
  })
}

calls.queryOther = function(id){
  var url = "https://omdbapi.com?i="
  var bechId = "tt" + id; //get individual id
  return $.getJSON(url + bechId).then(function(res){
    //set properties on response i.e.(Poster,genre,rated,plot)
    // console.log("res2", response2);
    // response[n].Poster = response2.Poster;
    // response[n].Genre = response2.Genre;
    // response[n].imdbRating = response2.imdbRating;
    // response[n].Rated = response2.Rated;
    // response[n].Plot = response2.Plot;
    return res
  })
}
  // .then(function(response){
  //   console.log("response before loop: ", response);
  //   for (let n = 0; n < response.length; n++) { //loop through bech results
  //     var bechId = "tt" + response[n]["imdbid"]; //get individual id
  //     console.log(url + bechId);
  //     //query individual id
  //       //console.log("Poo", response[n]);
  //       //console.log(response2);
  //     })
  //   }
  // });
export default calls
