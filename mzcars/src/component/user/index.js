import React,{Component, Fragment} from 'react'
import { Tabs, Card } from 'antd';
import AllUser from './AllUser'
import WaitUser from './WaitUser'
import axios from '../../utils/axios'

const { TabPane } = Tabs;
class User extends Component{
  constructor(){
    super()
    this.state = {
      All:[],
      wait:[]
    }
  }
  componentDidMount(){
    axios.post('/mz/getCustomers')
    .then((res)=>{
      let {data} = res
      data.map((item,index)=>{
        if (!item.leader){
          this.state.wait.push(item)
        }
        return this.state.All.push(item)
      })

    })
  }


  render(){
    return(
      <Fragment>
        <Tabs defaultActiveKey="2">
          <TabPane tab="客户管理" disabled key="1">
          </TabPane>
          <TabPane tab="全部客户"  key="2">
            <Card><AllUser>{this.props=this.state.All}</AllUser></Card>
          </TabPane>
          <TabPane tab="待分配客户" key="3">
          <Card><WaitUser>{this.props=this.state.wait}</WaitUser></Card>
          </TabPane>
        </Tabs>
      </Fragment>
      
    )
  }
}

export default User