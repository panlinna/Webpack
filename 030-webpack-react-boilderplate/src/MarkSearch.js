import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

class MarkSearch extends React.Component {
  render () {
  marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }
  return(
    <div
      className="content"
      dangerouslySetInnerHTML={{
        __html: marked(xx)
      }}
    />
  )
}

export ddefault MarkSearch;
