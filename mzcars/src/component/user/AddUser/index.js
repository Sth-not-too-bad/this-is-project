import React,{Component, Fragment} from 'react'
import { PageHeader,Card } from 'antd';
import './index.less'
class AddUser extends Component{
  render(){
    return(
      <Fragment>
        <PageHeader
          onBack={() => null}
          title="添加客户"
        />
        <Card>
          <div>
            <h2>基本信息</h2>
            
          </div>
          
        </Card>
      </Fragment>
    )
  }
}

export default AddUser