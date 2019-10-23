import React from 'react'
import Loadable from 'react-loadable'


const LoadableComponent =()=>{
    return (
        <div>
            loading 
        </div>
    )

    } 
    export default (loader,loading=LoadableComponent )=>{
      return   Loadable({
        loader,//需要被加载的组件
        loading //在加载过程中显示的过程组件
    }) 
  }
