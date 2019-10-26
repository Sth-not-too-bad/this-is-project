import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'

import Cars from  './cars'

const Eg = ComponentImport(()=>import('./component/eg'))
const Eg1 = ComponentImport(()=>import('./component/eg1'))
const Carstyle = ComponentImport(()=>import('./component/style/carstyle'))
const Edit = ComponentImport(()=>import('./component/style/edit'))
const Leads = ComponentImport(()=>import('./component/report/leads'))


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
                            <Route path='/cars/customers' component={Eg1}></Route>
                            <Route path='/cars/store/list' component={Carstyle}></Route>
                            <Route path='/cars/store/edit' component={Edit}></Route>
                            <Route path='/cars/report/leads' component={Leads}></Route>
                        </Cars>
                    )
                }}></Route>
                </Switch>
                
            </HashRouter>
        )
       
    }
}

export default RootRouter