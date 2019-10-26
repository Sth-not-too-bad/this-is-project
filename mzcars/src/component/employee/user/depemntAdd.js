import React,{Component,Fragment} from 'react' 
import {Modal,Input, Button} from 'antd';
import './useradd.less'
import '../style/reset.less'
import '../../../../node_modules/antd/dist/antd.min.css'
import store from '../store/store';
import ActionCreate from '../store/actionCreator'

class depAdd extends Component{
    constructor(){
        super()
        this.state={
          visible:false
        }
    }
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
    componentDidMount(){
      store.subscribe(()=>{
          this.setState({})
      })
    }
    render(){
        return(
            <Fragment>
                <Button style={{border:'none'}}  icon='plus' onClick={this.showModal}></Button>
                <Modal
                    title="添加部门"
                    visible={this.state.visible}
                    onOk={()=>{
                        console.log(store.getState())
                        let {value} = store.getState()
                        this.setState({
                          visible: false,
                        });
                        ActionCreate.addList(value)
                    }}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                    width='300px'
                    >
                    <Input id='name' placeholder="请填写部门名称"  onChange={(e)=>{ActionCreate.changeDepValue(e)}}/>
                </Modal>
            </Fragment>
        )
    }
}
export default depAdd