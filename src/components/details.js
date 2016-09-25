import React , { Component } from 'react';
import { connect }           from 'react-redux';
import { browserHistory }    from 'react-router';
import Paper                 from 'material-ui/Paper';
require("../../style/style.css");

class Detail extends Component {
  renderOnSelected () {
    const { name, description, url} = this.props.selectedItem;
    if (name) {
      return (
        <div>
          <h2>Fire Grilled for your tastes</h2>
          <h1>{name}</h1>
          <p>{description}</p>
          <Paper zDepth={5} ><img src ={url}/></Paper>
        </div>
      );
    } else {
      return <h2>Fire Grilled for your tastes</h2>
    }

  }

  render(){
      return <div>{this.renderOnSelected()}</div>
  }
}

function mapStateToProps(state){
  return {
    selectedItem: state.selectedItem
  };
}

export default connect(mapStateToProps)(Detail);
