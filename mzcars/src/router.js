import React, { Component } from 'react'
import ComponentImport from './utils/componentImport'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import Cars from './cars'
import { Provider } from 'react-redux';
import store from './store';
import home from './component/roles/home';

const Login = ComponentImport(()=>import("./component/login"))
const Home = ComponentImport(()=>import("./component/home"))
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
        )

    }
}

export default RootRouter