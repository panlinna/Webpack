import React from 'react';
import axios from 'axios';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //hello: "hello"
      resString: "resString"
    };
  }
  _handleSubmit(e) {
   e.preventDefault();
   axios.get('https://api.github.com/users/newming')
         .then((res) => {
            this.setState({resString: res.data.avatar_url});
            console.log(res);
          });
 }
  render (){
    return(
      <div>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <button type="submit">submit</button>
          </form>
          <h1>{this.state.resString}</h1>
      </div>
    )
  }
}

export default UserInfo;
