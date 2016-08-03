import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "hello"
    };
  }
  render (){
    return(
      <div>
          <form >
            <button type="submit">submit</button>
          </form>
          <h1>{this.state.hello}</h1>
      </div>
    )
  }
}

export default UserInfo;
