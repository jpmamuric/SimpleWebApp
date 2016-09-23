import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
// require("../style/style.css");

import List from '../list';

 class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  render() {
    const { menu } = this.props;
    const { isActive } = this.props;
    return (
      <div>
        <List  menu={ menu } isActive={ isActive }/>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    menu: state.menu,
    isActive: state.isActive
  };
}

export default connect(mapStateToProps, actions)(Menu);
