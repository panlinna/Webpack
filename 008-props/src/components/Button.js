import React,{Component} from"react";


class Button extends Component {
   getStyles(){
     return {
       button: {
         color:'pink',
         backgroundColor:this.props.bg,
         borderColor:'#2db7f5',
         foneSize:'14px'
       }
     }
   }
   render(){
     const styles = this.getStyles();
     console.log(styles);
     return (
       <button style={styles.button}>{this.props.title}</button>
     )
   }
 }

 Button.propTypes = {
   title: React.PropTypes.string.isRequired,
   bg: React.PropTypes.string.isRequired,
 };
 Button.defaultProps = {
   title: "add",
   bg: "teal"
 };

export default Button;
