import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import Cars from  './cars'
import Add from './haha'


const User = ComponentImport(()=>import('./component/user'))
const AddUser = ComponentImport(()=>import('./component/user/AddUser'))
const Roles = ComponentImport(()=>import('./component/roles/home'))
const AddRoles = ComponentImport(()=>import('./component/roles/add'))
const Eg = ComponentImport(()=>import('./component/eg'))
const Eg1 = ComponentImport(()=>import('./component/eg1'))
const Employee = ComponentImport(()=>import('./component/employee/user/useradd'))
const EmployeeAdd = ComponentImport(()=>import('./component/employee/user/Deponment'))
const employeeDetail = ComponentImport(()=>import('./component/employee/user/userDetail'))




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
                            <Route exact path='/cars/set/roles' component={Roles}></Route>
                            <Route path='/cars/coustom/adduser' component={AddUser}></Route>
                            <Route exact path='/cars/set/roles/addroles' component={AddRoles}></Route>
                            <Route exact path='/cars/set/employee' component={Employee}></Route>
                            <Route exact path='/cars/set/employee/employeeAdd' component={EmployeeAdd}/>
                            {/* <Route exact path='/cars/set/employee/employeeDetail/:id' component={employeeDetail}/> */}

                        </Cars>
                    )
                }}></Route>
                </Switch>
                
            </HashRouter>
        )
       
    }
}

export default RootRouter