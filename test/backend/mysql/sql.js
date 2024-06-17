module.exports = {
    boardList:'select * from board order by no desc',
    boardInfo:'select no,title,writer,content from board where no = ?',
    boardInsert:'insert into board set?',
    boardDelete:'delete from board where no = ?',
    boardUpdate:'update board set ? where no = ?'
}