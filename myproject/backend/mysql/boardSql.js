module.exports = {
  boardList : 'select * from board order by no desc limit ?,?',
  boardCount : 'select count(*) cnt from board',
  boardInfo : 'select * from board where no = ? ',
  boardInsert:'insert into board set ?',
  boardUpdate:'update board set ? where no = ?',
  boardDelete:'delete from board where no = ?',
  ReplyView:'select * from reply where boardno = ? order by no desc limit ?,?',
  ReplyInsert:'insert into reply set ?',
  ReplyCount:'select count(*) cnt from reply',
  ReplyDelete:'delete from reply where no = ?'
}