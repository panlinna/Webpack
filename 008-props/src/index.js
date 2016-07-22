import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Cards from './components/Cards.js';


class App extends Component {

  render(){

    return(
      <div>
          <List title="This is title1" date="2016.7.20" index="1"/>
          <List title="This is title2" date="2016.7.21" index="2"/>
          <List title="This is title3" date="2016.7.22" index="3"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
