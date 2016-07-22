import React from 'react';

class App extends React.Component {
  getStyles() {
     return {
       root: {
         backgroundColor: 'deeppink',
         padding: '20px',
         color: 'white',
         fontFamily: 'sans-serif'
       }
     }
   }

  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
        hello everyone
      </div>
    )
  }
}

export default App;
