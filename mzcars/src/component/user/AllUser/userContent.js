import React,{Component, Fragment} from 'react'
import {Button,Table, Card } from 'antd';
import {withRouter} from 'react-router-dom' 

const columns=[
  {
    title: '客户',
    dataIndex: 'Cname',
    render: text => <a>{text}</a>,
  },
  {
    title: '客户创建时间',
    dataIndex: 'Ctime',
  },
  {
    title: '责任销售',
    dataIndex: 'leader',
  },
  {
    title: '意向车系/车型',
    dataIndex: 'want',
  },
  {
    title: '客户状态',
    dataIndex: 'state',
  },
  {
    title: '客户来源',
    dataIndex: 'newhere',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    render:()=>{
      return(
        <Button type="link" onClick={()=>this.props.history.push('/cars/coustom/detail')}>详情</Button>
      )
    }
  },
]
const rowSelection = {
  getCheckboxProps: record => ({
    name: record.name,
  }),
}

class AllUserContent extends Component{
  constructor(){
    super()
    this.state={
      data: [
      ]
    }
  }
  render(){
    console.log(this.props.children)
    this.state.data=this.props.children
    console.log(this.state.data)
    return(
      <Fragment>
          <div>
            <div className='content-header'>
              <Button type="primary" onClick={()=>{this.props.history.push('/cars/coustom/adduser')}}>添加客户</Button>
              <p>共6000条 | 当前第1页</p>
            </div>
            <Card>
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            </Card>
          </div>
      </Fragment>
    )
  }
}
export default withRouter(AllUserContent)