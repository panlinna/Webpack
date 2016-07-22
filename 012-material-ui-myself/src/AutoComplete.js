import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

export default class AutoCompleteExampleSimple extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }
  handleUpdateInput(value){
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput.bind(this)}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput.bind(this)}
          floatingLabelText="Full width"
          fullWidth={true}
        />
         <RaisedButton label="Default"  backgroundColor='pink' style={{margin:'12px'}}/>
         <RaisedButton label="Primary" primary={true} style={{margin:'12px'}} />
         <RaisedButton label="Secondary" secondary={true}  style={{margin:'12px'}} />
         <RaisedButton label="Disabled" disabled={true}  style={{margin:'12px'}} />
         <RaisedButton label="Full width" fullWidth={true} style={{margin:'12px'}} />
      </div>
    );
  }
}
AutoCompleteExampleSimple.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
