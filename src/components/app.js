import React, { Component } from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import * as actions         from '../actions/index';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import AppBar               from 'material-ui/AppBar';
import Drawer               from 'material-ui/Drawer';

injectTapEventPlugin();
// require("../style/style.css");

 class App extends Component {
  openSideNav() {
    this.props.setState(true);
  }

  closeSideNav(){
    this.props.setState(false);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <AppBar
              title="Pampanga Master Grill"
              onLeftIconButtonTouchTap={()=>this.openSideNav()}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
          </div>
          {this.props.children}
          <Drawer
            docked={false}
            width={300}
            open={this.props.isActive}
            onRequestChange={()=>this.closeSideNav()}
            >
            Drawer
        </Drawer>
        </div>
      </MuiThemeProvider>

    );
  }
}

function mapStateToProps(state) {
  return {
    isActive: state.isActive
  };
}

export default connect(mapStateToProps, actions)(App);
