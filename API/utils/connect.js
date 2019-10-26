function connectToDb() {
  var mysql = require("mysql");

  var connection = mysql.createConnection({
    host: "10.60.14.117",
    user: "root",
    password: "root",
    database: "hai"
  });

  connection.connect();
  console.log('ok')
  return connection
} 
module.exports = {
  connectToDb
};







