import React, { Component, PropTypes } from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import * as actions         from '../actions/index';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import AppBar               from 'material-ui/AppBar';
import Drawer               from 'material-ui/Drawer';
import {Tabs, Tab}          from 'material-ui/Tabs';
import {
  cyanA100,
  yellowA100 }              from 'material-ui/styles/colors';

injectTapEventPlugin();
// require("../style/style.css");

const muiTheme = getMuiTheme({
  appBar: {
    height: 100,
    color: cyanA100
  }
});

const inkBarStyle = {
  background : yellowA100,
  height: 5
};

 class App extends Component {
   state = {
     open: false
   };

   static contextTypes = {
      router: React.PropTypes.object
    }

   componentWillMount() {
     this.props.fetchMenu();
   }

  routeHome(){
    this.context.router.push('/');
  }

  routeMenu(){
    this.context.router.push('/menu');
  }

  render() {
    const { menu } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div>
            <AppBar
              title="Pampanga Master Grill"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              />

            <Tabs inkBarStyle={inkBarStyle} contentContainerStyle={{background: '#FFF'}}>
              <Tab label="Home" onClick={()=>this.routeHome()}></Tab>
              <Tab label="Menu" onClick={()=>this.routeMenu()}></Tab>
              <Tab label="Location"></Tab>
              <Tab label="Contact"></Tab>
            </Tabs>
          </div>
          {this.props.children}
          <Drawer
            docked={false}
            width={450}
            open={this.state.open}
            onRequestChange={()=>this.closeSideNav()}
            >
            <Link to='/' onClick={()=>this.closeSideNav()}>Home</Link>
            <Link to='/menu' onClick={()=>this.closeSideNav()}>Menu</Link>
        </Drawer>
        </div>
      </MuiThemeProvider>

    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

export default connect(mapStateToProps, actions)(App);
