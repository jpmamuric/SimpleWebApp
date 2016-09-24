import React, { Component } from 'react';
import { connect }          from 'react-redux';
import * as actions         from '../../actions/index';
// require("../style/style.css");

import List                 from '../list';
import Detail               from '../details';

 class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  render() {
    const { menu } = this.props;
    return (
      <div>
        <div className='row'>
        <div className="col-md-8"><List  menu={ menu } /></div>
        <div className="col-md-4"><Detail /></div>
        </div>
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
