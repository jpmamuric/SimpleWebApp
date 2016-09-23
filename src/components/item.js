import React, { Component } from 'react';
import { GridTile }         from 'material-ui/GridList';
require("../../style/style.css");


export default class Item extends Component {
  render() {
    const { name, id, url, featured } = this.props.item;
    return (
      <GridTile
         className="tile"
        rows={featured ? 2 : 1}
        cols={featured ? 2 : 1}
      >
        <img src={url}/>
      </GridTile>
    );
  }
}

//pop, description in a box on the side , blur out back ground, click to open and arrow pointing from description
