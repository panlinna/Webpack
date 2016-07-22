import React,{Component} from "react";

class List extends Component {
      render(){
        let styles={
          root:{
            wigth:'80%',
            height:'100px',
            backgroundColor:'teal',
            margin:'10px auto',
            borderShadow:'2px 2px'
          },
          left:{
            width:'20%',
            height:'100px',
            lineHeight:'100px',
            textAlign:'center',
            float:'left',
            backgroundColor:'pink'
          },
          right:{
            width:'80%',
            height:'100px',
            textAlign:'center',
            float:'left',
            backgroundColor:'teal'
          }
        }
        return(
          <div style={styles.root} >
            <div style={styles.left}>{this.props.index}</div>
            <div style={styles.right}>
              <h3>{this.props.title}</h3>
              <p>{this.props.date}</p>
            </div>
          </div>
        )
      }
    }
    List.defaultProps={
      index:1,
      title:"This is title",
      date:"2016.7.20"
    }
export default List;
