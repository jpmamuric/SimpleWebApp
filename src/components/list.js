import React, { Component } from 'react';
import { GridList }         from 'material-ui/GridList';

import Item                 from './item';
// require("../style/style.css");

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
};


export default class List extends Component {
  renderItems() {
    return this.props.menu.map(item => {
      return <Item key={item.id} item={item} />
    });
  }

  render() {
    return (
      <div style={styles.root} >
        <GridList
          cols={3}
          >
          {this.renderItems()}
        </GridList>
      </div>
    );
  }
}
