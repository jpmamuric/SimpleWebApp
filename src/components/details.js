import React , { Component } from 'react';

export default class Detail extends Component {
  render(){
    return <div>{this.params.name}</div>;
  }
}
