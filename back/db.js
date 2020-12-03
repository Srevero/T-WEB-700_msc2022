var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'money-mysql',
    user     : 'admin',
    port     : '3306',
    password : 'admin',
    database : 'countOfMoney'
});
module.exports=connection;