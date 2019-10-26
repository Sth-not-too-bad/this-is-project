import React,{Component, Fragment} from 'react'
import { Steps, Popover,PageHeader, Card,Divider, Icon,Button } from 'antd';
import './index.less'
const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

class Detail extends Component{ 
  constructor(){
    super()
      this.state={
        value:1
      }
    }
  
  render(){
    return(
      <Fragment>
        <Card>
          <PageHeader
            onBack={() => this.props.history.push('/cars/customers')}
            title="客户详情"
          />
        </Card>
        <Card className='step'>
          <Steps current={0} progressDot={customDot}>
            <Step title="新客户"  />
            <Step title="已到店" />
            <Step title="预定"  />
            <Step title="交车" />
          </Steps>
          <Divider />
          <div >
            <span>客户资料</span><Button type="link" onClick={()=>{this.props.history.push('/cars/coustom/detail')}}><Icon type='form'/>编辑</Button>
            
          </div>
        </Card>

      </Fragment>
    )
  }
}

export default  Detail