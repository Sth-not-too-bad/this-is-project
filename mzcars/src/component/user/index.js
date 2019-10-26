import React,{Component, Fragment} from 'react'
import { Tabs, Card } from 'antd';
import AllUser from './AllUser'
import WaitUser from './WaitUser'
import axios from '../../utils/axios'

const { TabPane } = Tabs;
class User extends Component{

  componentDidMount(){
    axios.post('/user/getCustomers')
    .then((data)=>{
      console.log(data)
    })
  }

  render(){
    return(
      <Fragment>
        <Tabs defaultActiveKey="2">
          <TabPane tab="客户管理" disabled key="1">
          </TabPane>
          <TabPane tab="全部客户"  key="2">
            <Card><AllUser></AllUser></Card>
          </TabPane>
          <TabPane tab="待分配客户" key="3">
          <Card><WaitUser></WaitUser></Card>
          </TabPane>
        </Tabs>
      </Fragment>
      
    )
  }
}

export default User