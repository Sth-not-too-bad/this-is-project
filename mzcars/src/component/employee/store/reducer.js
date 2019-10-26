import state from './state'
export default(prevState=state,action)=>{
    const newData = prevState
    let {type,params} = action
    let {list} = newData
    switch(type){
        case 'CHANGE_DEP_VALUE':
            newData.value = params.target.value
            console.log(newData.value)
            break;
        case 'ADD_LIST':
            console.log(newData)
            newData.visible = true
            list.push({msg:params})
            console.log(list)
            break;
        case 'DEL_LIST':
            list.splice(params,1);
            break;
    }
    return newData
}
