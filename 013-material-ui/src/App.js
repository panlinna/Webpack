import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Auto from './Auto';



class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  handleTouchTap(){
    alert("jfds");
  }

  render () {
    return(
      <div>
        <div>
        <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
        </div>
        <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
        onTitleTouchTap={this.handelClick}
        iconElementRight={<FlatButton label="Save" />}
        />

        <div style={{marginTop:'20px'}}>
            <RaisedButton label="Default"  style={{marginRight:'20px'}}/>
            <RaisedButton label="Primary" primary={true}  style={{marginRight:'20px'}}/>
            <RaisedButton label="Secondary" secondary={true}  style={{marginRight:'20px'}}/>
            <RaisedButton label="Disabled" disabled={true}  style={{marginRight:'20px'}}/>
        </div>
        <div>
            <Auto/>
            <br />
            <br />
            <RaisedButton label="Full width" fullWidth={true} />
        </div>
        <div>
          <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
        </div>

      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


export default App;
