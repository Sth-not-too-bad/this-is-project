import React,{Component, Fragment} from 'react'
import UserHeader from './userheader'
import UserContent from './userContent'
import './index.less'

class WaitUser extends Component{
  render(){
    return(
      <Fragment>
        <UserHeader></UserHeader>
        <UserContent>{this.props=this.props.children}</UserContent>
      </Fragment>
    )
  }
}

export default WaitUser