import React,{Component} from 'react'

import './useradd.less'

class uesrDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            userAvatar:props.data.userAvatar||'',
            position: props.data.position||'',
            partName: props.data.partName||"1",
            userRole: props.data.userRole||"1",
            vxTel: props.data.vxTel||"1",
            loginTel:props.data.loginTel|| "1",
            email:props.data.email|| "1",
            adress:props.data.adress|| "1",
            userName: props.data.userName||"1",
            vxName:props.data.vxName||"1"
        }
    }
    render(){
        console.log(this)
        let {userAvatar,position,partName,userRole,vxTel,loginTel,email,adress,userName,vxName} = this.state
        return(
            <div className='model'>
                <div className='h1'>{userName}</div>
                <form>
                    <p>头像:<span>{userAvatar}</span></p>
                    <p>职位:<span>{position}</span></p>
                    <p>部门:<span>{partName}</span></p>
                    <p>角色:<span>{userRole}</span></p>
                    <p>绑定微信手机:<span>{vxTel}</span></p>
                    <p>登录企业管理后台手机:<span>{loginTel}</span></p>
                    <p>微信:<span>{vxName}</span></p>
                    <p>邮箱:<span>{email}</span></p>
                    <p>地址:<span>{adress}</span></p>
                </form>
            </div>            
        )
    }
}
export default uesrDetail