import React , { Component } from 'react';
import { browserHistory }    from 'react-router';

export default class Detail extends Component {
  routeBack() {
    browserHistory.push('/menu');
  }

  render(){
    return (
      <div>
        <button onClick={()=>this.routeBack()}> Back </button>
        {this.props.params.id}
      </div>
    );
  }
}
