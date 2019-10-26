import React,{Component} from 'react'
import { Switch, Menu, Breadcrumb, Icon } from 'antd';
import state from'../../store/state'
import Store from '../../store/store';
import actionCreator from '../../store/actionCreator'
import Axios from '../../utils/axios'
import Header from 'antd/lib/calendar/Header';
const {SubMenu} = Menu


class LStyle extends Component{
    constructor(){
      super()
      this.state={
        option:[],
        optionStyle:[]
      }
    }
    rootSubmenuKeys = [];
    state = {
        mode: 'inline',
        // theme: 'light',
        openKeys: [],
        value:''
        
      };
      onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          
          this.setState({ openKeys });
        } else {
         
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
      };
      componentDidMount(){
          const clickName = this.props.children.clickName
          console.log(clickName)
          let obj = {container:{}}
          obj.container.brand = clickName
          let data = JSON.stringify(obj)
          console.log(data)
          Axios.post('/qiu/askCars',data,
          {headers:{'Content-Type':'application/JSON'}})
          .then((res)=>{
            console.log(res)
            this.setState({option:res.data})
            console.log(this.state.option)
          })
          
      }
      handelChange(e){
        this.setState({
            value:e.target.value
        })
    }
      submit(index,price){
        console.log(index,price)
        let obj = {container:{}}
        let data = JSON.stringify(obj)
        Axios.post('/qiu/upCars',data,
        {headers:{'Content-Type':'application/JSON'}})
        .then((res)=>{
          console.log(res)
          this.setState({option:res.data})
          console.log(this.state.option)
        })
      }
      renderData(){
        const clickName = this.props.children.clickName
        const data = this.props.children.option
        // const data = this.state.option
        // console.log(data)
        return data.map((item,index)=>{
          
            return (
                    <div>
                      <div style={{padding:'10px none'}}>
                              <span style={{width:100,height:50,display:'inline-block',padding:'10px none'}}>{item.style}</span>
                              <span style={{width:150,display:'inline-block',paddingLeft:'none'}}>{item.kinds}</span>
                              <span style={{width:150,marginLeft:80,display:'inline-block'}}>指导价:{item.price1}</span>
                              <span style={{width:100,marginLeft:80,display:'inline-block'}}>
                                  门店价:<input type='text' value={item.price2} 
                                  onChange={this.handelChange.bind(this)}
                                  style={{width:50,height:20,border:'none',border:'1px solid #ccc'}}/>
                              </span>
                              <span onClick={this.submit.bind(this,index,item.price2)}>提交</span>

                            </div>
                
                    </div>)
          })
        }
     
    
        // return data.map((item,index)=>{
        //     if(item.brand == styleIndex){
        //       return item.style.map((item,index)=>{
        //         return (
        //              <SubMenu
        //               title={
        //                   <span style={{width:700,height:40,display:'block'}}>{item.name}</span>
        //               }
        //              style={{width:700,border:'1px solid #eee',marginLeft:20,marginTop:5}}>
                      
        //               {item.clude.map((item,index)=>{
        //                 console.log(item)
        //                 return (<Menu.Item style={{width:700,borderBottom:'1px solid #eee',paddingLeft:'none'}}>
        //                         <span style={{width:150,display:'inline-block',paddingLeft:'none'}}>{item}</span>
        //                         <span style={{width:100,marginLeft:80,display:'inline-block'}}>指导价:</span>
        //                         <span style={{width:100,marginLeft:80,display:'inline-block'}}>
        //                             门店价:<input type='text' value='' style={{width:50,height:20,border:'none',border:'1px solid #ccc'}}/>
        //                         </span>
        //                         <span> <span/>提交</span>

        //                       </Menu.Item>)
        //               })}
        //               </SubMenu>
            
        //         )
        //       })
        //     }
              
         
        // })

      render(){
        // const {carstyle,styleIndex} = state
        let {styleIndex} = Store.getState()
        let index = styleIndex.key
        // console.log(index)
        
        return(
            <div>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 700 ,borderRight:"none"}}
                >
                   {this.renderData(index)}
                </Menu>
            </div>
        )
    }
}

export default LStyle