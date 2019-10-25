import React,{Component} from 'react'
import SelectMany from './selectMany'
import {Card,Table,Spin,Button,PageHeader,Divider,Select} from 'antd'
const { Option } = Select;
class AddRoles extends Component{
    handleChange=(value)=>{
        console.log(value)
    }
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    }
    // jump=(path)=>{
    //     this.props.history.push(path)
    // }
    render(){
        return(
            <div>
                <PageHeader
                    style={{
                    border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={()=>{this.props.history.push('/cars/set/roles')}}
                    //onClick={this.jump.bind(this,'/cars/set/roles/addroles')}
                    title="添加角色"
                />
                <Card>
                    <p>
                    角色名称
                    </p>
                    <Divider dashed/>
                    角色名称：
                    <Select
                        labelInValue
                        defaultValue={{ key: '请选择角色名称' }}
                        style={{ width: 120 }}
                        onChange={this.handleChange}
                    >
                        <Option value="超级管理员">超级管理员</Option>
                        <Option value="管理员">管理员</Option>
                        <Option value="部门主管">部门主管</Option>
                    </Select>
                    <Divider />                
                <p>
                操作权限
                </p>
                <Divider dashed />                    
                    <SelectMany></SelectMany> 
                    <SelectMany></SelectMany> 
                    <SelectMany></SelectMany> 
                    <SelectMany></SelectMany> 
                    <SelectMany></SelectMany> 
                <Divider />                                                   
                <p>
                数据权限
                </p>
                </Card>
            </div>
        )
    }
}
export default AddRoles