import React,{Component, Fragment} from 'react'
import { Input,Select,DatePicker,Button,} from 'antd'
const { Option } = Select
class UserHeader extends Component{
  constructor(){
    super()
    this.state = {
      State:true
    }
  }
  render(){
    return(
      <Fragment>
        <div>
          客户状态：<Select style={{width:'25%',marginRight:'25px',marginBottom:'10px'}} placeholder='请准确输入'>
                    <Option value="Option2-1">Option2-1</Option>
                    <Option value="Option2-2">Option2-2</Option>
                  </Select>
          客户姓名：<Input type='text' style={{width:'25%',marginRight:'25px',marginBottom:'10px'}} placeholder='请准确输入' />
          客户手机：<Input type='tel' style={{width:'25%',marginRight:'25px',marginBottom:'10px'}} placeholder='请准确输入' />
          {this.state.State? 
          <div>
            责任销售：<Select style={{width:'25%',marginRight:'25px',marginBottom:'10px'}} placeholder='请准确输入'>
                      <Option value="Option2-1">Option2-1</Option>
                      <Option value="Option2-2">Option2-2</Option>
                    </Select>
            意向车系/车型：<Select style={{width:'22%',marginRight:'25px',marginBottom:'10px'}} placeholder='请准确输入'>
                      <Option value="Option2-1">Option2-1</Option>
                      <Option value="Option2-2">Option2-2</Option>
                    </Select>
            客户来源：<Select style={{width:'25%',marginRight:'25px',marginBottom:'10px'}} placeholder='请准确输入'>
                      <Option value="Option2-1">Option2-1</Option>
                      <Option value="Option2-2">Option2-2</Option>
                    </Select><br/>
            客户创建时间：<DatePicker style={{marginRight:'50px'}}/>
            上次跟进时间：<DatePicker style={{marginRight:'50px'}}/>
            <div className='button-box'>
              <Button type="primary" >查询</Button>
              <Button onClick={()=>{}}>重置</Button>
              <Button type="link" onClick={()=> this.setState({State:false})}>收起</Button>
            </div>
          </div>:
          <div className='show'>
            <Button type="link" onClick={()=> this.setState({State:true})}>展开</Button>
          </div>}
        </div>
      </Fragment>
    )
  }
}
export default UserHeader