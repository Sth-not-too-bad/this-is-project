import React,{Component, Fragment} from 'react'
import { PageHeader,Card,Button,Form,Input,Radio,Select } from 'antd';
import {withRouter} from 'react-router-dom'
import axios from '../../../utils/axios'
import './index.less'

const {Option} = Select

class AddUser extends Component{
  constructor(){
    super()
    this.state={
      value:1
    }
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    })
  }
  Submit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
        let time = new Date()
        var YY = time.getFullYear()
        var MM = time.getMonth()
        var DD = time.getDate()
        let Time = `${YY}-${MM}-${DD}`
        values.Ctime = Time
        console.log(values)
        axios.post('/mz/addCustomer',values)
        .then((res)=>{
          console.log(res)
        })
      }
    });
  };
  render(){
    console.log(this.props)
    const { getFieldDecorator } = this.props.form;
    return(
      <Fragment>
        <PageHeader
          onBack={() => this.props.history.push('/cars/customers')}
          title="添加客户"
        />
        <Card>
          <div>
            <h2>基本信息</h2>
            <Form  labelCol={{ span:5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
              <Form.Item label="姓名">
                {getFieldDecorator('Cname', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="联系电话">
                {getFieldDecorator('Ctel', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="微信">
                {getFieldDecorator('CVX', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="性别">
              {getFieldDecorator('gender', {})(
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </Radio.Group>)}
              </Form.Item>
              <Form.Item label="客户来源">
                {getFieldDecorator('Cfrom', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="介绍人">
                {getFieldDecorator('leader', {
                })(<Input />)}
              </Form.Item>
            </Form>
          </div>
          <div>
            <h2>购车需求</h2>
            <Form  labelCol={{ span:5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
              <Form.Item label="意向车型">
                {getFieldDecorator('car', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(
                  <Select>
                      <Option value="Option2-1">Option2-1</Option>
                      <Option value="Option2-2">Option2-2</Option>
                    </Select>
                )}
              </Form.Item>
              <Form.Item label="颜色偏好">
                {getFieldDecorator('color', {})(
                <Input />)}
              </Form.Item>
              <Form.Item label="购车预算">
                {getFieldDecorator('yusuan', {})(
                <Input />)}
              </Form.Item>
              <Form.Item label="付款方式">
              {getFieldDecorator('payStyle', {})(
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio value={3}>全款</Radio>
                  <Radio value={4}>贷款</Radio>
                </Radio.Group>)}<br/>
                <Button type="primary" onClick={this.Submit}>保存客户</Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Fragment>
    )
  }
}

export default Form.create()(withRouter(AddUser))