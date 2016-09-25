import React, { Component } from 'react';
import { connect }          from 'react-redux';
import * as actions         from '../../actions/index';
// require("../style/style.css");

import List                 from '../list';
import Detail               from '../details';
import Dialog               from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

 class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  closeModal(){
    this.props.setState(false);
  }

  render() {
    const { menu, isActive} = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={()=>this.closeModal()}
      />
    ];
    return (
      <div>
        <div className='row'>
          <div className="col-md-8"><List  menu={ menu } /></div>
          <div className="col-md-4"><Detail /></div>
        </div>
        <Dialog
         modal={false}
         open={isActive}
         actions={actions}
         onRequestClose={()=>this.closeModal()}
         autoScrollBodyContent={true}
         >
         <Detail />
       </Dialog>
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
