const mysql = require('mysql2');

//const sql = require('./sql.js');// SQL 쿼리문이 작성되어있는 파일

const conn = { // mysql 접속 설정
    connectionLimit:10,
    host:'127.0.0.1',
    port:'3306',
    user:'hr',
    password:'hr',
    database:'test'
};
const pool = mysql.createPool(conn);
let name = '홍길동';
let email = 'ad@sa.da';
let phone = '010-2222-2222';
//const sql = "insert into customers(name,email,phone) values(?,?,?)"; [name,email,phone]
const sql = "insert into customers set ? ";
const params = {name:'김미자',email:'ad@das.da',phone:'010-3333-3333',address:'대구 수성구'}
pool.query(sql,params,(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
    
});