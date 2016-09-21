import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
// require("../style/style.css");

import List from './list';

 class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  render() {
    const { menu } = this.props;
    return (
      <div>
        <List  menu={menu} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    menu: state.menu
  };
}

export default connect(mapStateToProps, actions)(Menu);
