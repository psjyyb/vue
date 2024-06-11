const todoSql = require('./todosql.js')
const boardSql = require('./boardSql.js')
module.exports= {
  customerList : 'select * from customers',
  customerInsert:'insert into customers set ?',
  customerUpdate:'update customers set ? where id = ?',
  customerDelete:'delete from customers where id = ?',
  ...boardSql,
  ...todoSql
}