import React,{Component,Fragment} from 'react' 
import {Modal,Input, Button} from 'antd';
import './useradd.less'
import '../style/reset.less'
import '../../../../node_modules/antd/dist/antd.min.css'
import store from '../store/store';
import ActionCreate from '../store/actionCreator'

class depUpdate extends Component{
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
            </Fragment>
        )
    }
}
export default depUpdate