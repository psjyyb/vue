module.exports = {
  boardList : 'select * from board order by no  limit ?,3',
  boardInfo : 'select * from board where no = ? ',
  boardInsert:'insert into board set ?',
  boardUpdate:'update board set ? where no = ?',
  boardDelete:'delete from board where no = ?'
}