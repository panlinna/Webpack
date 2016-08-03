import React from 'react'

import Dog from '../images/dog.jpeg';

class Footer extends React.Component {
    render(){
      let styles={
        root:{
          textAlign:'center',
          color:'#fff',
          backgroundColor:'#212121',
          padding:'30px 10px'
        },
        img:{
          width:'40%',
          marginTop:'20px',
          maxWidth:'200px'
        }
      }
      return(
        <div style={style.root}>
          <img src={Dog} style={style.img}>
        </div>
      )
    }
}
export default Footer;
