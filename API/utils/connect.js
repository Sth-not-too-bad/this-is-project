function askUsers() {
  var mysql = require("mysql");
  let a;

  var connection = mysql.createConnection({
    host: "10.60.14.117",
    user: "root",
    password: "root",
    database: "hai"
  });

  connection.connect();
  console.log("ok");
  var sql = "SELECT * FROM users";
  let  chaxun = new Promise( function (resolve,reject) {
    connection.query(sql, function(error, results) {
        if (error) {
          throw error;
        } else {
          a = results;
          console.log(1);   
          resolve(a)  
        }
      });
  } )
  chaxun.then(
   function (a) {
    console.log(2)
    
   }
  )
  return  a 
  //在这里返回的时候 他还是什么也没有
}
module.exports = {
  askUsers
};






