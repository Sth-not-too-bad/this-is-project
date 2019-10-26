import State from './state'
// import { Switch } from 'antd';
export default(preState=State,action)=>{
    // let newData = JSON.parse(JSON.stringify(preState))
    let newData = preState
    let {type,params}=action
    switch(type){
        case 'CLICK_STYLE':
            newData.styleIndex = params
        break;
        default:
            break;
    }
    return newData
}