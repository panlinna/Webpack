import React from 'react';

class UserInfo extends React.Component {

  render () {
    return(
      <div>
          <img src={this.props.avaterUrl}/>
      </div>
    )
  }
}

export default UserInfo;
