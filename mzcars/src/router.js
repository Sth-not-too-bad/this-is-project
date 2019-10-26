import React, { Component } from 'react'
import ComponentImport from './utils/componentImport'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import Cars from './cars'
import { Provider } from 'react-redux';
import store from './store';
import home from './component/roles/home';

<<<<<<< HEAD

<<<<<<< HEAD
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
=======
=======
const Login = ComponentImport(()=>import("./component/login"))
const Home = ComponentImport(()=>import("./component/home"))
>>>>>>> zly
const User = ComponentImport(() => import('./component/user'))
const AddUser = ComponentImport(() => import('./component/user/AddUser'))
const Roles = ComponentImport(() => import('./component/roles'))
//const AddRoles = ComponentImport(() => import('./component/roles/add'))



class RootRouter extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Redirect exact from="/" to="login"></Redirect>
                        <Route path="/login" component={Login}></Route>
                        <Route path='/cars' render={() => {
                            return (
                                <Cars>
                                    <Route path='/cars' component={Home}></Route>
                                    <Route path='/cars/customers' component={User}></Route>
                                    <Route exact path='/cars/set/roles' component={Roles}></Route>
                                    <Route path='/cars/coustom/adduser' component={AddUser}></Route>
                                </Cars>
                            )
                        }}></Route>
                    </Switch>

                </HashRouter>
            </Provider>
>>>>>>> b18ae98dc23e3792d65084c03d727bd8488a2c7c
        )

    }
}

export default RootRouter