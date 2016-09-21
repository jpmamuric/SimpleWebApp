import React, { Component } from 'react';
// require("../style/style.css");


export default class Item extends Component {
  render() {
    const { name, id } = this.props.item;
    return <li >{name}</li>;
  }
}
