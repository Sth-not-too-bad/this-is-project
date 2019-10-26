import React ,{Component} from 'react'
import { Card,Avatar,Table,Form,Popconfirm,Modal,Input, Button, Icon,Drawer,Select} from 'antd';

import './useradd.less'
import '../style/reset.less'
import '../../../../node_modules/antd/dist/antd.min.css'
import DepAdd from './depemntAdd'
import store from '../store/store';
// import DepUpdate from './depUpdate'
import ActionCreate from '../store/actionCreator'
// import { runInThisContext } from 'vm';
import Axios from 'axios'
import UserDetail from './userDetail'
import { getFileItem } from 'antd/lib/upload/utils';
const { Option } = Select;

// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     roles:'獾狸猿',
//     dep: '32',
//     tel:'132132',
//   });
// }

class UserAdd extends Component{
    constructor(){
        super()
        this.columns = [
            {
              title: '头像',
              dataIndex: 'Avatar',
              key:'Avatar',
              render:()=>{
                  return(
                      <div>
                          <Avatar shape="square" icon="user" />
                      </div>
                  )
              }
            },
            {
              title: '姓名',
              dataIndex: 'userName',
              key:'userName',

            },
            {
              title: '角色',
              dataIndex: 'userRole',
              key:'userRole',

            },
            {
                title: '部门',
                dataIndex: 'partName',
                key: 'partName',

            },
            {
                title: '手机',
                dataIndex: 'loginTel',
                key: 'loginTel',

            },
            {
                title: '操作',
                key: 'op',
                render:(data)=>{
                    return(
                        <div className='c209'>
                            <div>
                                <Button type="primary" onClick={this.showDrawer}>
                                编辑
                                </Button>
                                <Drawer
                                width='400'
                                title="修改数据"
                                placement="right"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.ishide}
                                >

                                    <Form > 
                                        <Form.Item label='姓名：'>
                                            <input style={{width:300}} value={this.state.userName} placeholder='请输入姓名' onChange={(e)=>{
                                                console.log(e)
                                                this.setState({userName:e.target.value})
                                            }}/>
                                        </Form.Item>
                                        <Form.Item label='职位：'>
                                            <Select  style={{ width: 300 }} onChange={(value)=>{
                                                console.log(value)
                                                this.setState({userRole:value})

                                            }}>
                                                <Option value="店总">店总</Option>
                                                <Option value="销售总监">销售总监</Option>
                                                <Option value="销售经理">销售经理</Option>
                                                <Option value="网销组">网销组</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label='角色：'>
                                            <Select  style={{ width: 300 }} onChange={(value)=>{
                                                console.log(value)
                                                this.setState({partName:value})
                                            }}>
                                                <Option value="管理员">管理员</Option>
                                                <Option value="超级vip">超级vip</Option>
                                            </Select>
                                        </Form.Item>
                                        <br/>
                                        <Form.Item label='微信手机号'>
                                            <input style={{width:300}} value={this.state.vxTel} placeholder='请输入绑定的微信手机号' onChange={(e)=>{
                                                    console.log(e.target.value)
                                                    this.setState({vxTel:e.target.value})}}/>
                                        </Form.Item>
                                        <Form.Item label='登录后台手机号'>
                                            <input style={{width:300}} value={this.state.loginTel} placeholder='请输入登录后台手机号' onChange={
                                                (e)=>{
                                                    console.log(e.target.value)
                                                this.setState({loginTel:e.target.value})}}/>
                                        </Form.Item>
                                        <Form.Item >
                                            <Button onClick={this.onClose}>取消</Button>
                                            <Button onClick={()=>{
                                                console.log(data,'修改')

                                                // this.state.ishide=false
                                                this.setState({})
                                                console.log(this.state)
                                                let Upuser = {container:{
                                                    userName:this.state.userName,
                                                    userCode:'12345',
                                                    userAvatar:'',
                                                    userRole:this.state.userRole,
                                                    partName:this.state.partName,
                                                    vxTel:this.state.vxTel,
                                                    loginTel:this.state.loginTel,
                                                    vxName:'hq',
                                                    email:'123@qq,com',
                                                    adress:'北京市 昌平区',
                                                    position:'',
                                                    token:'aaaa'
                                                },id:data.Id}

                                                Axios.post('http://10.60.14.117:3000/Upuser',Upuser)
                                                .then((res)=>{
                                                    console.log(res,'ok')
                                                    this.getData()
                                                })
                                                .catch((err)=>{
                                                    console.log(err,)
                                                })
                                            }}>修改</Button>
                                        </Form.Item>
                                    </Form>
                                </Drawer>
                            </div>
                            <Popconfirm title='你确定要删除吗？' onConfirm={()=>{
                                console.log('删除',data.Id)
                                Axios.post('http://10.60.14.117:3000/delUser',{id:data.Id})
                                .then((res)=>{
                                    console.log("ok",res)
                                    this.getData()
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            }}>
                                <Button type='danger'>删除</Button>
                            </Popconfirm>
                                <Button onClick={()=>{
                                    console.log(data)
                                    this.setState({updateState:true,updataData:data})
                                    // this.props.history.push(`/cars/set/employee/employeeDetail/:${data}`)
                                    }}>查看</Button>
                        </div>
                    )
                }
            },
          ];
        this.state={
            expand: false,
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            dataList:[],
            updateState:false,
            updataData:null,
            ishide:false,
            userName:'',
            userRole:'',
            partName:'',
            vxTel:'',
            loginTel:''
        }
    }
    showDrawer = () => {
        this.setState({
            ishide: true,
        });
    };
    
    onClose = () => {
    this.setState({
        ishide: false,
    });
    };
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
    };
    getData(){
        // let url = '/hq/userInfo'
        // http://10.60.14.117:3000/userInfo
        // http://yapi.demo.qunar.com/mock/8110/cars
        Axios.post('http://10.60.14.117:3000/userInfo')
        .then((data)=>{
            console.log(data)
            this.setState({dataList:data.data})
        })
        .catch(()=>{
            console.log('err')
        })
    }
    componentDidMount(){
        this.getData()
        this.setState()
        // store.subscribe(()=>{
        //     this.setState({})
        // })
    }
    refresh(data){
        let {dataList} = this.state
        dataList=[]
        dataList.push(data)
        this.setState({dataList})
    }
      Search(e){
        e.preventDefault();
        console.log(this.props.form.getFieldsValue())
        let searchData = {
            container:this.props.form.getFieldsValue()
        }
        console.log(searchData)
        Axios.post('http://10.60.14.117:3000/askUser',searchData)
        .then((data)=>{
            let sData = data.data[0]
            console.log(data.data[0],'查询')
            if(sData){
                this.refresh(sData)
            }
            return false
        })
        .catch(()=>{
            console.log('err')
        })
      }
      reset(){
          this.props.form.resetFields()
      }

    render(){
        const { loading, selectedRowKeys,dataList,updateState,updataData} = this.state;
        const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        let {list} = store.getState();
        const {getFieldDecorator} = this.props.form
        console.log(list)
        return(
            <div>
                <div className='h1'>人员管理</div>
                {!updateState||<UserDetail data={updataData}></UserDetail>}
                <div className='Card-content'>
                    
                    <Card className='Card-left' title="汇通新远" bordered={false} style={{ width: 300 }} 
                    extra={
                        <div>
                            <DepAdd/>
                        </div>}>
                        <p>销售部
                            <span className='icon'>
                                <DepAdd/>
                                <div>
                                    <Button style={{border:'none'}} 
                                    icon='edit' onClick={this.showModal}></Button>
                                    <Modal
                                        title="修改部门"
                                        visible={this.state.visible}
                                        onOk={this.hideModal}
                                        onCancel={this.hideModal}
                                        okText="确认"
                                        cancelText="取消"
                                        width='300px'
                                        >
                                        <Input  placeholder="----"/>
                                        </Modal>
                                </div>
                                <Popconfirm title='你确定要删除吗？' onConfirm={()=>{
                                     console.log('删除',this)
                                }}>
                                    <span><Icon type="delete"/></span>
                                </Popconfirm>
                            </span>
                        </p>
                        <p>管理部
                            <span className='icon'>
                                <DepAdd/>
                                <div>
                                    <Button style={{border:'none'}} 
                                    icon='edit' onClick={this.showModal}></Button>
                                    <Modal
                                        title="修改部门"
                                        visible={this.state.visible}
                                        onOk={this.hideModal}
                                        onCancel={this.hideModal}
                                        okText="确认"
                                        cancelText="取消"
                                        width='300px'
                                        >
                                        <Input  placeholder="----"/>
                                        </Modal>
                                </div>
                                <Popconfirm title='你确定要删除吗？' onConfirm={()=>{
                                     console.log('删除',this)
                                }}>
                                    <span><Icon type="delete"/></span>
                                </Popconfirm>
                            </span>
                        </p>
                        {list.map((item,index)=>{
                        return(
                            <p key={index}>{item.msg}
                                <span className='icon'>
                                    <DepAdd/>
                                    <div>
                                        <Button style={{border:'none'}} 
                                        icon='edit' onClick={this.showModal}></Button>
                                        <Modal
                                            title="修改部门"
                                            visible={this.state.visible}
                                            onOk={()=>{
                                                console.log(store.getState())
                                                let {value,list} = store.getState()
                                                list[0].msg = value
                                                this.setState({
                                                    visible: false,
                                                  });
                                            }}
                                            onCancel={this.hideModal}
                                            okText="确认"
                                            cancelText="取消"
                                            width='300px'
                                            >
                                            <Input  placeholder={item.msg} onChange={(e)=>{ActionCreate.changeDepValue(e)}}/>
                                        </Modal>
                                    </div>
                                    <Popconfirm title='你确定要删除吗？' onConfirm={()=>{
                                        console.log('删除',this)
                                        ActionCreate.del(index)

                                    }}>
                                        <span><Icon type="delete"/></span>
                                    </Popconfirm>
                                </span>
                            </p>
                        )})}
                    </Card>
                    <Card className='Card-right'>
                        <Form className='ant-form-inline' onSubmit={this.Search.bind(this)}>
                            <Form.Item label="姓名:">
                            {getFieldDecorator('userName')(
                                    <Input id='name' placeholder="请输入" />
                                )}
                                {/* <Input id='name'  placeholder="请填写" /> */}
                            </Form.Item>
                            <Form.Item label="手机号:">
                            {getFieldDecorator('loginTel')(
                                    <Input id='tel' placeholder="请填写"/>
                                )}
                                {/* <Input id='tel' placeholder="请填写"/> */}
                            </Form.Item>
                            <Form.Item>
                                <Button icon="search" type="primary" htmlType='submit'>查询</Button>
                                <Button icon="sync" style={{ marginLeft: 8 }} onClick={this.reset.bind(this)}>重置</Button>
                            </Form.Item>
                        </Form>
                        <Form className='option'>
                            <Form.Item>
                                <Button type="primary" icon='plus' onClick={()=>{
                         this.props.history.push('/cars/set/employee/employeeAdd')}}>新建人员</Button>
                                <Button>同步通讯录</Button>
                                <Button type="primary" disabled>设为默认名片</Button>
                                <Button>企业二维码</Button>
                            </Form.Item>
                        </Form>
                        <Table rowSelection={rowSelection} 
                        columns={this.columns} 
                        dataSource={dataList} 
                        onRow={record=>{
                            return{
                                onClick:event=>{console.log(this,event)}
                            }
                        }}/>
                    </Card>
                </div>
            </div>
        )
    }
}
export default Form.create()(UserAdd);
