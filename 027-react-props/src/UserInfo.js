import React from 'react';

class UserInfo extends React.Component {
  render (){
    return(
      <div>
          <img src={this.props.avatarUrl}/>
      </div>
    )
  }
}

export default UserInfo;
