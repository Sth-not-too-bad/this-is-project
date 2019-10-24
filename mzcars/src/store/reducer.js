import state from './state' 
export default (prevState=state,action)=>{
  let newData = JSON.parse(JSON.stringify(prevState))
  let {type,params} = action
  switch(type){
    case 'CHANGE_TOKEN_MODAL':
      newData.tokenModal=params
  }
  return newData
}