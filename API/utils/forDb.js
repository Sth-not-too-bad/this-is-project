function doSth(container) {
  if (container) {
    let keys = "Id";
    let values = ["null"];
    let tbd = "null";
    for (let a in container) {
      keys += `,${a}`;
      values.push(`'${container[a]}'`);
      tbd += ",?";
    }
    values = values.join();
    return [keys, values, tbd];                               ````````````````````````````````````````````````````````````
  } else {
    throw "you tripping? why ask data without rules?";
  }
}
//拆分传入的对象，将其拆分成对应的 key集合字符串，和VALUE 数组
function doSth1(type, container) {
  let limit = [];
  let a;
  for (let key in container) {
    limit.push(`${key}='${container[key]}'`);
  }

  if (type === 0) {
    a = limit.join(" AND ");
  } else if (type === 1) {
    a = limit.join();
  }
  return a;
}

function fangwen(connection, sql, res, rej) {
  connection.query(sql, function(err, result) {
    if (err) {
      rej(err);
      return;
    }
    res(result);
  });
}

function insert(target, connection, container) {
  return new Promise((res, rej) => {
    let detail = doSth(container);
    console.log(detail);
    if (detail.length === 0) {
      rej("数据提交错误");
      return;
    } else {
      let addSql = `INSERT INTO ${target} (${detail[0]}) VALUES (${detail[1]})`;
      console.log(addSql);
      fangwen(connection, addSql, res, rej);
    }
  });
}

//查询全部
function search(target, connection, container) {
  return new Promise((res, rej) => {
    let allSql = `SELECT * FROM ${target}`;
    console.log(allSql)
    fangwen(connection, allSql, res, rej);
  });
}

//条件查询
function ask(target, connection, container) {
  return new Promise((res, rej) => {
    let type = 0;
    let real = doSth1(type, container);
    let askSql = `SELECT * FROM ${target}  WHERE ${real} `;
    console.log(askSql);
    fangwen(connection, askSql, res, rej);
  });
}

//修改
function update(target, connection, container, theid) {
  return new Promise((res, rej) => {
    let type = 1;
    let detail = doSth1(type, container);
    let upSql = `UPDATE ${target} SET ${detail} WHERE Id = ${theid}`;
    fangwen(connection, upSql, res, rej);
  });
}

//删除
function del(target, connection, theid) {
  return new Promise((res, rej) => {
    let delSql = `DELETE FROM ${target} where id=${theid}`;
    fangwen(connection, delSql, res, rej);
  });
}

module.exports = {
  search,
  insert,
  ask,
  update,
  del
};
