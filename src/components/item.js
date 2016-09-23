import React, { Component } from 'react';
import { GridTile }         from 'material-ui/GridList';
// require("../style/style.css");


export default class Item extends Component {
  render() {
    const { name, id, url, featured } = this.props.item;
    return (
      <GridTile
        rows={featured ? 2 : 1}
        cols={featured ? 2 : 1}
      >
        <img src={url}/>
      </GridTile>
    );
  }
}
