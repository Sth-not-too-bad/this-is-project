import React from 'react'
import { Form, Icon, Input, Button ,Card,message} from 'antd';
import './index.less'
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error("输入信息有误请重试")
        //console.log('Received values of form: ', values);
      }else{
          //console.log(values)
        //console.log(values.username)
        //let {username,password} = values
        // this.$axios.post('/yapi/admin/login',JSON.stringify({us:123,ps:123}))
        this.$axios.post('/api/toLogin',{
            "container":{
                "loginTel":values.username,
                "userCode":values.password
            }
        })
        .then((data)=>{
          console.log(data)
          if(data.data.token){
             
             message.success("登陆成功1s后跳转首页",1,()=>{
          this.props.history.push('/cars')
          })
          }else{
            message.error("请检查用户名和密码是否输入正确")
          }
         
        })
        // message.success("登陆成功1s后跳转首页",1,()=>{
        //   this.props.history.push('/admin')
        // })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className = "login-box">
      <Card style={{width:'400px',position:'fixed',top:'17vh',left:'100px'}}>
          <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' },
            { min: 5, message: '用户名长度5到9位' },
            { max: 9, message: '用户名长度5到9位' }
        ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
        </Form.Item>
      </Form>
      </Card>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm