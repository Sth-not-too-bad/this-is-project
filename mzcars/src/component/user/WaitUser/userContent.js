import React,{Component, Fragment} from 'react'
import {Button,Table, Card } from 'antd';
import {withRouter} from 'react-router-dom' 
const columns = [
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
    title: '意向车系/车型',
    dataIndex: 'car',
  },
  {
    title: '客户来源',
    dataIndex: 'origin',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    render(){
      return(
        <Button type="link" onClick={()=> this.setState({State:true})}>详情</Button>
      )
    }
  },
];
const data = [
  {
    key: '1',
    name:'jack',
    time: '2017-12-02 12:22',
    origin:'微信',
    car: '宝马 x5',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
];
const rowSelection = {
  getCheckboxProps: record => ({
    name: record.name,
  }),
};
class UserContent extends Component{
  render(){
    console.log(this.props)
    return(
      <Fragment>
          <div>
            <div className='Wcontent-header'>
              <p>共6000条 | 当前第1页</p>
            </div>
            <Card>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </Card>
          </div>
      </Fragment>
    )
  }
}
export default withRouter(UserContent)