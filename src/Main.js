import React, { Component } from 'react';

//receives all properties from child components and renders them here
class Main extends Component {
  render(){
    return(
      <div>
        <a href="/FemiList"><img id="femLogo" src="http://i.imgur.com/Pbfm6sX.png" alt="FemiList Logo"/></a>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
