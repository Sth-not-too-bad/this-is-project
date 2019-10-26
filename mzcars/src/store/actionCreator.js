import Store from './store'
export default{
    clickStyle(params){
        let action = {
            type:'CLICK_STYLE',
            params:params
        }
        // console.log(action)
        Store.dispatch(action)
    } 

}