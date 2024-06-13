module.exports= {
    customerList : 'select * from customers order by id desc limit ?,?',
    customerCount : 'select count(*) cnt from customers',
    customerInfo : 'select * from customers where id =?',
    customerInsert:'insert into customers set ?',
    customerUpdate:'update customers set ? where id = ?',
    customerDelete:'delete from customers where id = ?'
  }