import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import marked from 'marked';
import hljs from 'highlight.js';
import Hljs from './style/Hljs.css';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    let d = '```js\nconsole.log("hello wolrd")\n```';
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return(
      <div className="content">
        <div dangerouslySetInnerHTML={{__html: marked(d)}} />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
