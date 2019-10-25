import React,{Component} from 'react'
import {Card,Table,Button} from 'antd'
//import {Item} from 'rc-menu'
class UserList extends Component{
  constructor(){
      super()
      this.columns=[
          {
            title: '角色名称',
            dataIndex: 'name',
            width:170,
            height:80,
            key: 'name',
          },
          {
            title: '角色数据权限',
            dataIndex: 'role',
            width:400,
            height:80,
            key: 'role',
          },
          {
            title: '操作',
            dataIndex: 'action',
            width:200,
            height:80,
            key: 'right',
            render:(data)=>{
                return(
                    <div>
                        <Button size='small' type='primary'>编辑</Button>
                        <Button size='small' type='primary'>查看</Button>
                        <Button size='small' type='danger'>删除</Button>
                    </div>
                )
            }
          }
      ];
      this.dataSource=[
          {name:"超级管理员",role:"全公司",key:1},
          {name:"管理员",role:"全公司",key:2},
          {name:"超级管理员",role:"全公司",key:3},
          {name:"管理员",role:"全公司",key:4},
          {name:"超级管理员",role:"全公司",key:5},
          {name:"管理员",role:"全公司",key:6},
          {name:"超级管理员",role:"全公司",key:7},
          {name:"管理员",role:"全公司",key:8},
          {name:"超级管理员",role:"全公司",key:9},
          {name:"管理员",role:"全公司",key:10},
          {name:"超级管理员",role:"全公司",key:11},
          {name:"管理员",role:"全公司",key:12},
      ]
      
  }
  jump=(path)=>{
      this.props.history.push(path)
  }
  render(){
      return(
          <div>              
              <Card>
                  <Button size="large" type="primary" className="addUser" onClick={this.jump.bind(this,'/cars/set/roles/addroles')}>添加角色权限</Button>
                  <Table
                  width="800"
                  dataSource={this.dataSource}
                  columns={this.columns}
                  >
                      
                  </Table>
              </Card>
          </div>
      )
  }

}
export default UserList
