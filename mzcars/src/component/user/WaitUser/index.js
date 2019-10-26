import React,{Component, Fragment} from 'react'
import UserHeader from './userheader'
import UserContent from './userContent'
import './index.less'

class User extends Component{
  render(){
    return(
      <Fragment>
        <UserHeader></UserHeader>
        <UserContent></UserContent>
      </Fragment>
    )
  }
}

export default User