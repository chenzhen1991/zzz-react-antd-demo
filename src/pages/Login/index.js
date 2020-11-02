import React,{Component,useState, useEffect} from 'react';
import { SmileOutlined } from '@ant-design/icons';


// class Login extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       checkeds: [],
//     }
//   }
//
//   getCheckedArrId = (v)=>{
//     this.setState({
//       checkeds: v,
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         登录
//         <CheckboxList items={items} values={this.state.checkeds} onChangeInput={(v)=> this.getCheckedArrId(v)} />
//       </div>
//     )
//   }
// }

/* 函数式组件 */
const Login = () => {
  return(
    <div>
       登录
        <SmileOutlined />Icon有没有
      {/* <Icon type="step-forward" style={{color:'red'}} /> */}
    </div>
  )
}
export default Login;
