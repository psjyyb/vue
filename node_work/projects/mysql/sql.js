const todoSql = require('./todosql.js')
module.exports= {
  customerList : 'select * from customers',
  customerInsert:'insert into customers set ?',
  customerUpdate:'update customers set ? where id = ?',
  customerDelete:'delete from customers where id = ?',
  boardList : 'select * from board order by no  limit ?,3',
  boardInfo : 'select * from board where no = ? ',
  boardInsert:'insert into board set ?',
  boardUpdate:'update board set ? where no = ?',
  boardDelete:'delete from board where no = ?',
  ...todoSql
}