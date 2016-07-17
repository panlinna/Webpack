import React,{Component} from"react";


class Button extends Component {
   getStyles(){
     return {
       button: {
         color:'pink',
         backgroundColor:'purple',
         borderColor:'#2db7f5',
         foneSize:'14px'
       }
     }
   }
   render(){
     const styles = this.getStyles();
     console.log(styles);
     return (
       <button style = {styles.button}> click</button>
     )
   }
 }

export default Button;
