import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import marked from 'marked';
import hljs from 'highlight.js';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    marked.setOptions({
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        }
      });
    let xx = '```js\nconsole.log("hello world")\n```';
    return(
      <div>
        {marked('# I am using __markdown__.')}<br/>

          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: marked(xx)
            }}
          />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
