import React , { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Card from 'material-ui/Card';
import axios from 'axios';
import UserInfo from 'UserInfo';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class App extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  _handleSubmit(e){
    e.preventDefault();
    const account = this.refs.account.getValue();
    console.log(account);

  }
  render() {
    return (
        <div>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <TextField hintText="Github Account"
                      ref="account"/>
            <FlatButton label="Search Github"type="submit"
                      primary={true}/>
          </form>
          <UserInfo avaterUrl="https://avatars2.githubusercontent.com/u/15951209?v=3&s=460"/>
        </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
