7.20

cp -r 007 008-props
cd 008-props
npm install
npm run build
index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component{
  render(){
    return(

    )
  }
}
ReactDOM.render(<App/>,document.getElementById('app'));
传递组件从组件传递到主组件
return()中加入<p>Hello{this.props.name},{this.props.where}</p>
<App name=",supbigfly" where="hebei" />
src下新建文件夹component/Button.js
Button.js
import React, { Component } from 'react';
class Button extends Component {
  getStyles() {
     return {
       button: {
         color: '#fff',
         backgroundColor: '#2db7f5',
         borderColor: '#2db7f5',
         padding: '4px 15px 5px 15px',
         fontSize: '14px',
         borderRadius: '6px'
       }
     }
   }
  render(){
    const styles = this.getStyles();
    return (
      <button style={styles.button}>click</button>
    );
  }
}
index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.js';

class App extends Component{
  render(){

    return(
      <Button />
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
在子级通过this.props.title给父组件写接口，在函数的backgroundColor: this.props.bg,也可以，然后在父组件那里拿到并赋值。
父组件那里写属性title="aaa"
index.js中写入button没有写属性，那么定义默认样式，定义了样式再样式。
Button.defaultProps={
 	 	title:"我是默认标题",
  		bg:"green"
};
----index.js
Button.proTypes={
  		title:React.PropTypes.string.isRequired,
 		 bg:React.PropTypes.string.isRequired
};
一个组件的属性特别多，写着会看着乱，把样式定义到外面的变量里，外部是render外部
let btnProps={
  title:'来自外部变量',
  bg:'blue'
}
<Button title={btnProps.title} bg={btnProps.bg}/>
传递多个属性，不必变量名.属性命 变量名.属性名
   <Button {...btnProps2} />
let btnProps2 ={
  title:'传递多个属性',
  bg:"green"
}
将title和bg同时传入三个点。
渲染数组
render(){
    let btns=[
      <Button key='1' />,<Button key='2' />,,<Button key='3' />,,<Button key='4' />
    ]
return里面{}

7.21

1.预处理
2.装包:npm install
3.babel作用:1.编译es6至es5 2.编译react（简化react）
  -w 监听
  传参数作用:代码复用
4.组件化，面向对象编程思想
5.组件库 Material-UI
  可以自定制所需效果
  http://Material-UI
  http://ant.design (蚂蚁金服)
6.cp -rf *...   ---- 加 * 代表默认不拷贝
7.hmre----热模块替换
8.
