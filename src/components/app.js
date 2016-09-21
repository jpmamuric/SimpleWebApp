import React, { Component } from 'react';
import { Link } from 'react-router';
// require("../style/style.css");


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Pampanga Master Grill</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
