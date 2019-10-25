const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const mysql = require('mysql')
const { handle } = require("./utils/handle.js");
const { search,insert,ask ,update,del} = require("./utils/forDb.js");
const { confirm } = require("./utils/confirm.js");

const { connectToDb } = require("./utils/connect.js");
const con = connectToDb();
//链接到数据库

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//用于解析表单格式
app.use(bodyParser.json());
//用于解析JSON格式

app.post("/userInfo", (comein, goout) => {
//   let target = comein.body.target;
let target = 'users'
  let token = comein.body.token
//   confirm(token,con,goout)
  search(target,con,container).then(result => {
      result.forEach((item,index)=>{
          item.token=''
      })
    goout.send(result);
  });
});


app.post('/addUser',(comein,goout)=>{
    let container = comein.body.container
    let target ='users'
    insert(target,con,container).then(result=>{
        goout.send(result)
    })
})

app.post('/xiugai',(comein,goout)=>{
  let container = comein.body.container
  let target ='users'
  let theid = comein.body.id
  update(target,con,container,theid).then(result=>{
    goout.send(result)
  })
 
})















app.listen(3000, () => {
  console.log("strart srver");
});
