module.exports = {
    boardList:'SELECT b.no, b.title, b.writer, b.created_date, COUNT(r.no) AS cnt FROM t_board_board b LEFT JOIN t_comment_board r ON b.no = r.bno GROUP BY b.no, b.title, b.writer, b.created_date',
    replyCount:'select  bno,count(*) from t_comment_board group by bno',
    boardInfo:'select * from t_board_board where no = ?',
    replyList:'select * from t_comment_board where bno = ?',
    boardInsert:'insert into t_board_board set?',
    boardDelete:'delete from t_board_board where no = ?',
    boardUpdate:'update t_board_board set title = ?, content = ? where no = ?',
    reqlyDelete:'delete from t_comment_board where no = ? ',
    replyInsert:'insert into t_comment_board set writer= ? ,content= ? , bno = ?',
}