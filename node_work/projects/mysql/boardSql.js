module.export = {
    boardList : 'select * from board',
    boardInfo : 'select * from board where no = ? ',
    boardInsert:'insert into board set ?',
    boardUpdate:'update board set ? where no = ?',
    boardDelete:'delete from board where no = ?'
}