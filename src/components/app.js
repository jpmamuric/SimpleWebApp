import React, { Component } from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import * as actions         from '../actions/index';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import { cyanA100 }          from 'material-ui/styles/colors';
import AppBar               from 'material-ui/AppBar';
import Drawer               from 'material-ui/Drawer';

injectTapEventPlugin();
// require("../style/style.css");

const muiTheme = getMuiTheme({

  appBar: {
    height: 100,
    color: cyanA100
  }
});

 class App extends Component {
  openSideNav() {
    this.props.setState(true);
  }

  closeSideNav(){
    this.props.setState(false);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
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
            width={450}
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
