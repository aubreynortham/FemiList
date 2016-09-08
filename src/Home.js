import React, { Component } from 'react';
import SearchContainer from "./SearchContainer"

class Home extends Component {
  render() {
    return (
      <div>
        <h1><a href="/">IMDB<span id="ladyFont"> for the ladies</span></a></h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
