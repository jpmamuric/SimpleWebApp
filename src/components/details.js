import React , { Component } from 'react';
import { connect }           from 'react-redux';
import { browserHistory }    from 'react-router';

class Detail extends Component {
  renderOnSelected () {
    const { name, description } = this.props.selectedItem;
    if(!this.props.selectedItem){
      return <div> image goes here </div>
    }
    return (
      <div>
        <h2>Fire Grilled for your tastes</h2>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    );
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
