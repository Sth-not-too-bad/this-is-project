import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import Cars from  './cars'


const User = ComponentImport(()=>import('./component/user'))
const AddUser = ComponentImport(()=>import('./component/user/AddUser'))
const Detail = ComponentImport(()=>import('./component/user/detail'))
const Eg = ComponentImport(()=>import('./component/eg'))
const Eg1 = ComponentImport(()=>import('./component/eg1'))


class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                <Redirect exact from='/' to='/cars/home'></Redirect>
                <Route path='/login' component={Eg1}></Route>
                <Route path='/cars' render={()=>{
                    return(
                        <Cars>
                            <Route path='/cars/home' component={Eg}></Route>
                            <Route path='/cars/customers' component={User}></Route>
                            <Route path='/cars/coustom/adduser' component={AddUser}></Route>
                            <Route path='/cars/coustom/detail' component={Detail}></Route>
                        </Cars>
                    )
                }}></Route>
                </Switch>
                
            </HashRouter>
        )
       
    }
}

export default RootRouter