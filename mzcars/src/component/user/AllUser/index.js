import React,{Component, Fragment} from 'react'
import UserHeader from './userheader'
import UserContent from './userContent'
import './index.less'

class AllUser extends Component{
  render(){
    console.log(this)
    return(
      <Fragment>
        <UserHeader></UserHeader>
        <UserContent>{this.props=this.props.children}</UserContent>
      </Fragment>
    )
  }
}

export default AllUser