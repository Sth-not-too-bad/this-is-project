import store from './store'
export default{
    finish(index){
        let action={
            type:'FINISH_LIST',
            params:index
        }
        store.dispatch(action)
    },
    changeDepValue(e){
        let action={
            type:'CHANGE_DEP_VALUE',
            params:e
        }
        store.dispatch(action)
    },
    addList(value){
        console.log(value)
        let action={
            type:'ADD_LIST',
            params:value
        }
        store.dispatch(action)
    },
    del(index){
        let action={
            type:'DEL_LIST',
            params:index
        }
        store.dispatch(action)
    }
}