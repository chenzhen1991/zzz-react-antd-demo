import React from 'react';
import {useHistory} from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import './style.less';
import { login } from "../../api/login";


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

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

/* 函数式组件 */
const Login = () => {
  const history = useHistory()
  const onFinish = async (values) => {
    const res = await login({
      userName: values.username,
      password: values.password,
    });
    if(res && res.code === "200") {
      history.push('/welcome')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return(
    <div className="login">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login;
