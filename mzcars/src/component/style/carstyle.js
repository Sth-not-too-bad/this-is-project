import React from 'react'
import { Menu,Button } from 'antd';
import ActionCreator from '../../store/actionCreator'
import Store from '../../store/store';
import LStyle from './style'
import Axios from '../../utils/axios'

let carstyle=[
    {
        name:'宝马',
        style:[
            {name:'宝马1',clude:[1,2,3,4,5]},
            {name:'宝马2',clude:[1,2,3,4,5]},
            {name:'宝马3',clude:[1,2,3,4,5]}
        ]},
        {
            name:'奔驰',
            style:[
                {name:'奔驰1',clude:[1,2,3,4,5]},
                {name:'奔驰2',clude:[1,2,3,4,5]},
                {name:'奔驰3',clude:[1,2,3,4,5]},
                {name:'奔驰4',clude:[1,2,3,4,5]}
            ]},
        {
            name:'奥迪',
            style:[
                {name:'奥迪1',clude:[1,2,3,4,5]},
                {name:'奥迪2',clude:[1,2,3,4,5]},
                {name:'奥迪3',clude:[1,2,3,4,5]},
                {name:'奥迪4',clude:[1,2,3,4,5]}
            ]},
]
class Style extends React.Component{
    constructor(props){
        super(props)
        this.state={
            carstyle:[],
            brand:[],
            rootSubmenuKeys:['sub1', 'sub2', 'sub4'],
            mode: 'inline',
            theme: 'light',
            openKeys: ['0'],
            clickName:'BWM',
            option:[],
        }
    }
    changeMode = value => {
        this.setState({
          mode: value ? 'vertical' : 'inline',
        });
      };
    changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      }
    
    // componentDidMount(){
    //     Store.subscribe(()=>{
    //       this.setState({})
    //   })
    // }
    componentDidMount(){
        Axios.post('/qiu/getCars')
        .then((res)=>{
            console.log(res.data)
            this.setState({carstyle : res.data})
            res.data.map((item,index)=>{
            this.state.brand.push(item.brand)
            })
            let arr = this.state.brand
            // console.log(arr)
            unique1(arr)
            var name
            function unique1(arr){
                var hash=[]
                for (var i = 0; i < arr.length; i++) {
                    // console.log(hash)
                    
                    if(hash.indexOf(arr[i])==-1){
                        hash.push(arr[i]);
                    }
                }
                name = hash

                return hash
              }
              this.state.brand = name
              
            console.log(this.state.brand)
        })
        Store.subscribe(()=>{
          this.setState({})
          this.renderItem()
      })
    }
    clickName(name){
        // console.log(name)
        this.setState({clickName:name})
        // const clickName = this.props.children.clickName
        const clickName = this.state.clickName
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
    renderItem(carstyle){
        console.log(this.state.brand)
        var arr1= ["BMW", "大众", "奥迪", "本田", "丰田"]
        return arr1.map((item,index)=>{
            console.log(item)
            return <Menu.Item key={index} 
            onClick={this.clickName.bind(this,item)}>{item}</Menu.Item>
        })
    }
    render(){
        return(
            <div style={{width:1200,height:700,background:'white'}}>
                <div style={{float:"left"}}>
                    <Button type="primary" style={{marginLeft:30,marginTop:10}}
                        onClick={()=>{
                            this.props.history.push('/cars/store/edit')
                        }}
                    >添加/修改车系</Button>
                    <Menu
                    style={{ width: 256 ,marginTop:10}}
                    defaultSelectedKeys={['0']}
                    mode={this.state.mode}
                    theme={this.state.theme}
                    >
                    {this.renderItem(carstyle)}
                    </Menu>
                </div>
                
                <div style={{marginTop:20 ,float:"left",width:600,height:500,marginLeft:20}}>
                    <LStyle>
                    {this.props.location.state=this.state}
                    
                    </LStyle>
                </div>
                
            </div>
        )
    }
}

export default Style