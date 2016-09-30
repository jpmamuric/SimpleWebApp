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
          <h1>{name}</h1>
          <p>{description}</p>
          <Paper zDepth={5} ><img src ={url}/></Paper>
        </div>
      );
    } else {
      return  (
        <div>
          <h3>History:</h3>
          <h4>Pamanga is known in the filipines for  its unique and quality delicacies on the main island of Luzon.</h4>
        </div>
      );
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
