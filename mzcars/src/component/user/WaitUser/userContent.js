import React,{Component, Fragment} from 'react'
import {Button,Table, Card } from 'antd';
import {withRouter} from 'react-router-dom' 

/* const columns = [
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
    title: '意向车系/车型',
    dataIndex: 'want',
  },
  {
    title: '客户来源',
    dataIndex: 'Cfrom',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    render(){
      return(
        <Button type="link" onClick={()=>this.props.history.push('/cars/coustom/detail')}>详情</Button>
      )
    }
  },
]; */
const rowSelection = {
  getCheckboxProps: record => ({
    name: record.name,
  }),
};

class UserContent extends Component{
  constructor(){
    super()
    this.state={
      data:[ 
      ],
      columns: [
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
          title: '意向车系/车型',
          dataIndex: 'want',
        },
        {
          title: '客户来源',
          dataIndex: 'Cfrom',
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
    }
  }
  render(){
    console.log(this.props)
    this.state.data=this.props.children
    console.log(this.state.data)
    return(
      <Fragment>
          <div>
            <div className='Wcontent-header'>
              <p>共6000条 | 当前第1页</p>
            </div>
            <Card>
            <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
            </Card>
          </div>
      </Fragment>
    )
  }
}
export default withRouter(UserContent)