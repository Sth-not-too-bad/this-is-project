
function confirm(token,connection,goout){
    console.log(token)
    if (token){
        let modSql =`SELECT * FROM users WHERE token = ? `;
        let modSqlParams = [token];
        connection.query(modSql,modSqlParams, function(err, result) {
            if (err) {
              goout.send(err)
              return;
            }
            console.log(result.length)
            if(result[0]){
                
            }else{
                goout.send('you lose your token!')
            }
            
          }); 
    }
}
module.exports={
    confirm
}