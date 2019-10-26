import React,{Component,Fragment} from 'react' 
import {Form,Input, Button,Tooltip,Icon,Select,Progress} from 'antd';
import './useradd.less'
// import '../../style/reset.less'
// import '../../../node_modules/antd/dist/antd.min.css'
import '../style/reset.less'
import '../../../../node_modules/antd/dist/antd.min.css'
import Axios from 'axios'
const { Option } = Select;

function handleChange(value) {
    console.log(value);
  }
class DepAdd extends Component{
    constructor(){
        super()
        this.state={
            display:false,
            userName:'',
            userRole:'',
            partName:'',
            vxTel:'',
            loginTel:''
        }
    }
    
    render(){
        // const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          }
        const {getFieldDecorator} = this.props.form
        return(
            <Fragment>
                <Form onSubmit={this.addData.bind(this)}> 
                    <Form.Item className='TimeLine'>
                        <Icon type="clock-circle" /> 添加人员
                        {!this.state.display?<Progress size="small"/>:<Progress percent={100} size="small"/>}
                        添加成功 
                    </Form.Item> 
                    {/* <Form.Item label={ <span> 姓名&nbsp;</span>}>
                        {getFieldDecorator('userName', {rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                            ],
                        })(<Input.Password />)}
                    </Form.Item> */}
                    {/* 姓名：<input style={{width:300}} value={this.state.userName} placeholder='请输入姓名' onChange={(e)=>{
                        console.log(e)
                        this.setState({userName:e.target.value})
                    }}/><br/>
                    职位：<Select  style={{ width: 300 }} onChange={(value)=>{
                        console.log(value)
                        this.setState({userRole:value})

                    }}>
                        <Option value="店总">店总</Option>
                        <Option value="销售总监">销售总监</Option>
                        <Option value="销售经理">销售经理</Option>
                        <Option value="网销组">网销组</Option>
                    </Select><br/>
                    角色：<Select  style={{ width: 300 }} onChange={(value)=>{
                        console.log(value)
                        this.setState({partName:value})
                    }}>
                        <Option value="管理员">管理员</Option>
                        <Option value="超级vip">超级vip</Option>
                    </Select><br/>
                    微信手机号:<input style={{width:300}} value={this.state.vxTel} placeholder='请输入绑定的微信手机号' onChange={(e)=>{
                            console.log(e.target.value)
                            this.setState({vxTel:e.target.value})}}/><br/>
                    登录后台手机号:<input style={{width:300}} value={this.state.loginTel} placeholder='请输入登录后台手机号' onChange={
                        (e)=>{
                            console.log(e.target.value)
                        this.setState({loginTel:e.target.value})}}/><br/> */}
                    <Form.Item label={ <span> 姓名&nbsp;</span>}>
                        {getFieldDecorator('userName', {rules: [{ required: true, message: 'Please input your name!' }],
                        })(<Input style={{width:300}} placeholder='请输入姓名'/>)}
                    </Form.Item>
                    {/* <Form.Item label={ <span> 角色&nbsp;</span>}>
                        {getFieldDecorator('role', {rules: [{ required: true, message: 'Please input the roles!' }],
                        })(<Select defaultValue="dcc" style={{ width: 300 }} onChange={handleChange}>
                            <Option value="first">店总</Option>
                            <Option value="second">销售总监</Option>
                            <Option value="third">销售经理</Option>
                            <Option value="dcc">DCC专员</Option>
                        </Select>)}
                    </Form.Item> */}
                    <Form.Item label={ <span> 部门&nbsp;</span>}>
                        {getFieldDecorator('userRole', {rules: [{ required: true, message: 'Please input the roles!' }],
                        })(<Select  style={{ width: 300 }} onChange={handleChange}>
                            <Option value="店总">店总</Option>
                            <Option value="销售总监">销售总监</Option>
                            <Option value="销售经理">销售经理</Option>
                            <Option value="网销组">网销组</Option>
                        </Select>)}
                    </Form.Item>
                    <Form.Item label={ <span> 绑定微信手机&nbsp;
                        <Tooltip title="What do you want others to call you?">
                            <Icon type="info-circle" />
                        </Tooltip>
                    </span>}>
                        {getFieldDecorator('vxTel', {rules: [{ required: true, message: 'Please input your wxTel!' }],
                        })(<Input style={{width:300}} placeholder='请输入绑定的微信手机号' onClick={(e)=>{
                            console.log(e.target.value)
                            this.setState({vxTel:e.target.value})}}/>)}
                    </Form.Item>
                    <Form.Item label={ <span> 登录后台管理手机&nbsp;
                        <Tooltip title="What do you want others to call you?">
                            <Icon type="info-circle" />
                        </Tooltip>
                    </span>}>
                        {getFieldDecorator('loginTel', {rules: [{ required: true, message: 'Please input your Tel!' }],
                        })(<Input style={{width:300}} placeholder='请输入登录后台手机号' onClick={
                            (e)=>{
                                console.log(e.target.value)
                                this.setState({loginTel:e.target.value})}}/>)}
                    </Form.Item>
                    <Button type="primary" icon='plus' htmlType="submit" 
                    // onClick={
                    //         ()=>{
                    //         this.state.display = true
                    //         this.setState({})
                    //         console.log(this.state)
                    //         let data = {container:{
                    //             userName:this.state.userName,
                    //             userCode:'12345',
                    //             userAvatar:'',
                    //             userRole:this.state.userRole,
                    //             partName:this.state.partName,
                    //             vxTel:this.state.vxTel,
                    //             loginTel:this.state.loginTel,
                    //             vxName:'hq',
                    //             email:'123@qq,com',
                    //             adress:'北京市 昌平区',
                    //             position:'',
                    //             token:'aaaa'
                    //         }}
                    //         Axios.post('http://10.60.14.117:3000/addUser',data)
                    //         .then((res)=>{
                    //             console.log(res)
                    //         })
                    //     }}
                        >保存并继续</Button>
                        <Button onClick={()=>{
                         this.props.history.push('/cars/set/employee')
                        }}>取消并返回</Button>
                    <Form.Item className='submit'>
                        
                    </Form.Item>
                </Form>
            </Fragment>
        )
    }
    addData(e){
        // 禁止默认行为
        e.preventDefault();
        // 获取 form 表单的值
        this.state.display = true
        console.log(this.props.form.getFieldsValue());
        if(this.props.form.getFieldsValue()){
            let data = {
                container:this.props.form.getFieldsValue()
            }
            console.log(data)
            Axios.post('http://10.60.14.117:3000/addUser',data)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        return false
    }
}
export default Form.create()(DepAdd)