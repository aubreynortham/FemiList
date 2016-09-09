import $ from 'jquery'

export function queryOmdb (query) {
  var term = query.replace(/\s/, "+"); //replace white space characters with a "+"
  //var url = "https://omdbapi.com?s=" + term;
  var bechurl = "https://cors-anywhere.herokuapp.com/http://bechdeltest.com/api/v1/getMoviesByTitle?title=" + term;
  console.log("working");
  return $.getJSON(bechurl).then(function(response){
    return response;
  });
}
