import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { GridTile }         from 'material-ui/GridList';
import * as actions         from '../actions/index';
require("../../style/style.css");


class Item extends Component {
  render() {
    const { item } = this.props;
    const { name, id, url, featured } = this.props.item;
    return (
        <GridTile
          className="tile"
          rows={featured ? 2 : 1}
          cols={featured ? 2 : 1}
          onMouseOver={()=>this.props.getItem(item)}
          onClick={()=>this.props.setModalState(true)}
        >
          <img src={url}/>
        </GridTile>
    );
  }
}

export default connect(null, actions)(Item);

//pop, description in a box on the side , blur out back ground, click to open and arrow pointing from description
