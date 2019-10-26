const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
const { handle } = require("./utils/handle.js");
const { search, insert, ask, update, del } = require("./utils/forDb.js");
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
  let target = "users";
  search(target, con).then(result => {
    result.forEach((item, index) => {
      item.token = "";
    });
    goout.send(result);
  });
});
//查询用户

app.post("/addUser", (comein, goout) => {
  let container = comein.body.container;
  let target = "users";
  insert(target, con, container)
    .then(result => {
      goout.send(result);
    })
    .catch(() => {
      goout.send("别发了");
    });
});
//增加用户

app.post("/upUser", (comein, goout) => {
  let container = comein.body.container;
  let target = "users";
  let theid = comein.body.id;
  update(target, con, container, theid).then(result => {
    goout.send(result);
  });
  //更改用户信息
});

app.post("/delUser", (comein, goout) => {
  let target = "users";
  let id = comein.body.id;
  del(target, con, id);
});
//删除用户

app.post("/readRoles", (comein, goout) => {
  let target = "roles";
  search(target, con).then(result => {
    goout.send(result);
  });
});
//查询全部角色

app.post("/addRoles", (comein, goout) => {
  let target = "roles";
  let container = comein.body.container;
  insert(target, con, container)
    .then(result => {
      goout.send(result);
    })
    .catch(() => {
      goout.send("别发了");
    });
});
//添加角色

app.post("/upRole", (comein, goout) => {
  let target = "roles";
  let container = comein.body.container;
  let id = comein.body.id;
  update(target, con, container, id)
    .then(result => {
      goout.send(result);
    })
    .catch(() => {
      goout.send("别发了");
    });
});
//更新角色信息

app.post("/delRole", (comein, goout) => {
  let target = "roles";
  let id = comein.body.id;
  del(target, con, id);
});
//删除角色

app.post("/getCars", (comein, goout) => {
  let target = "cars";
  console.log('i am here')
  search(target, con).then(result => {
    goout.send(result);
  });
});
//查询车型信息

app.post('/addCars',(comein,goout)=>{
  let target = "cars";
  let container = comein.body.container;
  insert(target, con, container)
    .then(result => {
      goout.send(result);
    })
    .catch(() => {
      goout.send("别发了");
    });
})  
//添加车型

app.post("/upCars",(comein,goout)=>{
  let target = "cars";
  let container = comein.body.container;
  let id = comein.body.id;
  update(target, con, container, id)
    .then(result => {
      goout.send(result);
    })
    .catch(() => {
      goout.send("别发了");
    });
})
//修改车型信息

app.post('/getCustomers',(comein,goout)=>{
  let target = "customers";
  search(target, con).then(result => {
    goout.send(result);
  });
})
//获取客户信息

app.post("/addCustomer",(comein,goout)=>{
  let target = "customers";
  let container = comein.body.container;
  insert(target, con, container)
    .then(result => {
      goout.send(result);
    })
    .catch(() => {
      goout.send("别发了");
    });
})
//添加客户信息

app.post("upCustomer",(comein,goout)=>{
  let target = "customers";
  let container = comein.body.container;
  let id = comein.body.id;
  update(target, con, container, id)
    .then(result => {
      goout.send(result);
    })
    .catch(() => {
      goout.send("别发了");
    });
})
//修改客户信息

app.post("/delCustomers", (comein, goout) => {
  let target = "customers";
  let id = comein.body.id;
  del(target, con, id);
});
//删除数据





app.listen(3000, () => {
  console.log("strart srver");
});
