module.exports= {
    customerList : 'select * from customers order by id  limit ?,10',
    customerInfo : 'select * from customers where id =?',
    customerInsert:'insert into customers set ?',
    customerUpdate:'update customers set ? where id = ?',
    customerDelete:'delete from customers where id = ?'
  }