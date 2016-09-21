import React, { Component } from 'react';
// require("../style/style.css");
import Item from './item';

export default class List extends Component {
renderItems() {
  return this.props.menu.map(item => {
    return <Item key={item.id} item={item}/>
  });
}

  render() {
    return (
      <div>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}
