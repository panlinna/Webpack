import React,{Component} from"react";

import List from './List.js';

let megs = {
  {title:'This is title', date:'2016.7.20'},
  {title:'This is title', date:'2016.7.21'},
  {title:'This is title', date:'2016.7.22'}
}
class Cards extends Component{
  render(){
    let megs[];
      for (var i= 0;i<megs.length;i++){
        megs.push{
          <List title={megs[i].title} date={megs[i].date} index={i} />
        }
      }

    return (
      <div>
      {megs}
      </div>
    )
  }
}
export default Cards;
