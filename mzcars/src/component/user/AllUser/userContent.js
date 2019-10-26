import React,{Component, Fragment} from 'react'
import {Button,Table, Card } from 'antd';
import {withRouter} from 'react-router-dom' 



class UserContent extends Component{
  constructor(){
    super()
    this.columns=[
      {
        title: '客户',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '客户创建时间',
        dataIndex: 'time',
      },
      {
        title: '责任销售',
        dataIndex: 'shop',
      },
      {
        title: '意向车系/车型',
        dataIndex: 'car',
      },
      {
        title: '客户状态',
        dataIndex: 'state',
      },
      {
        title: '客户来源',
        dataIndex: 'origin',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render:(data)=>{
          return(
            <Button type="link" onClick={()=>{this.props.history.push('/cars/coustom/detail')}}>详情</Button>
          )
        }
      },
    ]
    this.state={
      data: [
        {
          key: '1',
          name:'jack',
          time: '2017-12-02 12:22',
          shop:'qiuqiu',
          car: '宝马 x5',
          state:'新客户',
          origin:'微信',
        }
      ],
      rowSelection: {
        getCheckboxProps: record => ({
          name: record.name,
        }),
      }
    }
  }
  render(){
    return(
      <Fragment>
          <div>
            <div className='content-header'>
              <Button type="primary" onClick={()=>{this.props.history.push('/cars/coustom/adduser')}}>添加客户</Button>
              <p>共6000条 | 当前第1页</p>
            </div>
            <Card>
            <Table rowSelection={this.state.rowSelection} columns={this.columns} dataSource={this.state.data} />
            </Card>
          </div>
      </Fragment>
    )
  }
}
export default withRouter(UserContent)