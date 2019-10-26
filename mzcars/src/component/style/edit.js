import React from 'react'
import {Tag,Checkbox,Button} from 'antd'
import Store from '../../store/store';
import Axios from '../../utils/axios'

let editStyle=[
    {
        name:'宝马',
        style:[
            {name:'宝马1',clude:[
                {label: '宝马1X', value: '宝马1X'},
                {label: '宝马1Xx', value: '宝马1Xx'},
            ]},
            {name:'宝马2',clude:[ 
                {label: '宝马2X', value: '宝马2X'},
                {label: '宝马2Xx', value: '宝马2Xx'},
            ]},
            {name:'宝马3',clude:[
                {label: '宝马3X', value: '宝马3X'},
                {label: '宝马3Xx', value: '宝马3Xx'},
            ]}
        ]},
        // {
        //     name:'奔驰',
        //     style:[
        //         {name:'奔驰1',clude:[1,2,3,4,5]},
        //         {name:'奔驰2',clude:[1,2,3,4,5]},
        //         {name:'奔驰3',clude:[1,2,3,4,5]},
        //         {name:'奔驰4',clude:[1,2,3,4,5]}
        //     ]},
        {
            name:'奥迪',
            style:[
                {name:'奥迪1',clude:[
                    {label: '奥迪1X', value: '奥迪1X'},
                    {label: '奥迪1Xx', value: '奥迪1Xx'},
                ]},
                {name:'奥迪2',clude:[
                    {label: '奥迪2X', value: '奥迪2X'},
                    {label: '奥迪2Xx', value: '奥迪2Xx'},
                ]},
                {name:'奥迪3',clude:[
                    {label: '奥迪3X', value: '奥迪3X'},
                    {label: '奥迪3Xx', value: '奥迪3Xx'},
                ]},
                {name:'奥迪4',clude:[
                    {label: '奥迪4X', value: '奥迪4X'},
                    {label: '奥迪4Xx', value: '奥迪4Xx'},
                ]}
            ]},
        {
            name:'奔驰',
            style:[
                {name:'奔驰1',clude:[
                    {label: '奔驰1X', value: '奔驰1X'},
                    {label: '奔驰1Xx', value: '奔驰2Xx'},
                ]},
                {name:'奔驰2',clude:[ 
                    {label: '奔驰2X', value: '奔驰2X'},
                    {label: '奔驰2Xx', value: '奔驰2Xx'},
                ]},
                {name:'奔驰3',clude:[
                    {label: '奔驰3X', value: '奔驰3X'},
                    {label: '奔驰3Xx', value: '奔驰3Xx'},
                    {label: '奔驰3X32', value: '奔驰3X32'},
                ]}
            ]},
]
class Edit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clickIndex : 0,
            styleList : []
        }
    }
    checkboxChange=(checkedValues)=> {
        // console.log('checked = ', checkedValues);
        // this.state.styleList = []
        console.log(checkedValues)
        
        this.state.styleList.push(checkedValues)
        // this.state.styleList.forEach((item,index)=>{
        //     if(item == ''){
        //         this.state.styleList.splice(index,1)
        //     }
        //     return this.state.styleList
        // })
        this.setState({styleList:this.state.styleList})
        console.log(this.state.styleList)
        // this.state.styleList=[]
        
        
    }
    renderStyle(editStyle){
        return editStyle.map((item,index)=>{
            // console.log(this.state.clickIndex)
            let data = item.style
            if(index === this.state.clickIndex){
                 return (data.map((item,index)=>{
                // console.log(clude)
                    return (
                        <div>
                            <div style={{width:700,height:40,background:'#eee',padding:'9px 10px'}}>{item.name}</div>
                            <Checkbox.Group onClick={(e)=>{
                               
                                this.state.styleList.push(e.target.value)
                                //  this.state.styleList.forEacch((item,index)=>{
                                //      console.log(item)
                                //     if(item==e.target.value){
                                //         // var a = this.state.styleList.indexOf(e.target.value)
                                //         this.state.styleList.splice(index,1)
                                //     }else{
                                //         this.state.styleList.push(e.target.value)
                                //     }
                                //     console.log(this.state.styleList)
                                //     this.setState({styleList:this.state.styleList})
                                //     return this.state.styleList
                                // })
                                this.setState({styleList:this.state.styleList})
                                }} options={item.clude} style={{width:700,height:40,padding:'5px 10px'}}/>
                        </div>
                    )
                }))
            }
           
        })
        
    }
    selectIndex(index){
        this.setState({clickIndex:index})
    }
    addStyle(){
        // console.log(this.state.styleList)
    }
    render(){
        return(
            <div style={{background:'white',padding:'0px 10px'}}>

                <span style={{fontSize:18}}>编辑车系</span>
                <span style={{float:'right'}}>
                    <Button type="primary" onClick={this.addStyle}>添加已选车系</Button>
                    <Button onClick={()=>{
                        this.props.history.push('/cars/store/list')
                        }}>返回</Button>
                </span>
                
                <div className='tags' style={{width:'100%',height:50,background:'#eee',margin:'30px 0'}}>
                    {this.state.styleList.map((item,index)=>{
                        return <Tag closable>{item}</Tag>
                    })

                    }
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='scrollStyle' style={{width:350,height:450,background:'white',border:'1px solid #eee'}}>
                        {editStyle.map((item,index)=>{
                            return <div key={index} 
                            onClick={this.selectIndex.bind(this,index)} 
                            style={{width:340,height:50,paddingTop:15}} >{item.name}</div>
                        })}
                    </div>
                    <div className='styleSelect' style={{width:700,height:450}}>
                        {this.renderStyle(editStyle)}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Edit