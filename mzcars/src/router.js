import React, { Component } from 'react'
import ComponentImport from './utils/componentImport'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import Cars from './cars'
import { Provider } from 'react-redux';
import store from './store';
import home from './component/roles/home';


const User = ComponentImport(()=>import('./component/user'))
const AddUser = ComponentImport(()=>import('./component/user/AddUser'))
const Detail = ComponentImport(()=>import('./component/user/detail'))
const Carstyle = ComponentImport(()=>import('./component/style/carstyle'))
const Edit = ComponentImport(()=>import('./component/style/edit'))
const Leads = ComponentImport(()=>import('./component/report/leads'))
const Roles = ComponentImport(() => import('./component/roles'))
const Login = ComponentImport(()=>import("./component/login"))
const Home = ComponentImport(()=>import("./component/home"))

class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                <Redirect exact from="/" to="login"></Redirect>
                <Route path="/login" component={Login}></Route>
                <Route path='/cars' render={()=>{
                    return(
                        <Cars> 
                            <Route path='/cars' component={Home}></Route>
                            <Route path='/cars/customers' component={User}></Route>
                            <Route path='/cars/store/list' component={Carstyle}></Route>
                            <Route path='/cars/store/edit' component={Edit}></Route>
                            <Route path='/cars/report/leads' component={Leads}></Route>
                            <Route path='/cars/coustom/adduser' component={AddUser}></Route>
                            <Route path='/cars/coustom/detail' component={Detail}></Route>
                            <Route exact path='/cars/set/roles' component={Roles}></Route>
                        </Cars>
                    )
                }}></Route>
                </Switch>
            </HashRouter>


        )
    }
}
export default RootRouter