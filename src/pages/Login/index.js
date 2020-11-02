import React,{Component,useState, useEffect} from 'react';
import { SmileOutlined } from '@ant-design/icons';
import CheckboxList from "../../components/CheckboxList";

const items = [
  {
    label:'苹果',
    id:1,
  },
  {
    label:'栗子',
    id:2,
  },
  {
    label:'梨子',
    id:3,
  },
];
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
  const [checkeds, setCheckeds] = useState([])
  const getCheckedArrId = (v)=>{
    setCheckeds(v)
  }
  useEffect(() => {
    if(checkeds){
      getCheckedArrId(checkeds)
    }
  }, [checkeds])
  return(
    <div>
       登录
        <SmileOutlined />Icon有没有
      {/* <Icon type="step-forward" style={{color:'red'}} /> */}
       <CheckboxList items={items} values={checkeds} onChangeInput={(v)=> getCheckedArrId(v)} />
    </div>
  )
}
export default Login;
