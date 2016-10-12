import React, { Component } from 'react';
import { connect }          from 'react-redux';
import * as actions         from '../../actions/index';

import List                 from '../list';
import Detail               from '../details';
import Dialog               from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

require("../../../style/style.css");

 class Menu extends Component {
  componentWillMount() {
    this.props.fetchMenu();
  }

  closeModal(){
    this.props.setModalState(false);
  }

  render() {
    const { menu, modalIsActive} = this.props;
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
          <div className="col-md-4">
            <h2>Fire Grilled for your tastes!</h2>
            <Detail />
          </div>
        </div>
        <Dialog
         modal={false}
         open={modalIsActive}
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
    modalIsActive: state.modalIsActive
  };
}

export default connect(mapStateToProps, actions)(Menu);
