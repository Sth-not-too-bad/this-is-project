const express =require('express')
const app=express()
const fs=require('fs')
const path=require('path')
const {test}= require('./utils/test.js')
const {askUsers}= require('./utils/connect.js')

//最终响应函数
function response(data) {
    res.send(data)
}

let bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
//用于解析表单格式


app.use(bodyParser.json())
//用于解析JSON格式


// app.get('/test',(req,res)=>{
//     res.send('hello world')
// })


// app.post('/posttest',(req,res)=>{
//     console.log('psot')
//     res.send(req.body)

// })

app.get('/login',(req,res)=>{
    let data =req.query
    


    //这是个对象
    //进入分支并返回
})
//登录的GET接口


app.post('/reg',(req,res)=>{
    let data=req.body
    res.send(data)
})


//静态资源目录
// app.use('/',express.static(path.join(__dirname,'../www')))


app.listen(3000,()=>{
    console.log(askUsers())
    console.log('strart srver')
})