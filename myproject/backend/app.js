var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const query = require('./mysql/index.js');
const session = require('express-session'); 
const fileStore = require('session-file-store')(session);

var replyRouter = require('./routes/reply.js')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const customerRouter = require('./routes/customer.js')
const boardRouter = require('./routes/board.js')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'secret key', //암호화하는 데 쓰일 키
  resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부
  cookie: { // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
    httpOnly: true, // true 이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음
    secure: true, // true 이면 https 환경에서만 쿠키 정보를 주고 받도록 처리,
    maxAge: 60000 // 쿠키가 유지되는 시간 (밀리세컨드 단위)
  },
  store: new fileStore() // 세션 저장소로 fileStore 사용
  }
));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/customer",customerRouter);
app.use("/board",boardRouter);
app.use("/reply",replyRouter);

//app.get('/uploads', express.static('D:/upload'));

// app.get("/img/:no",(req,res)=>{
//   console.log('durlxka'),
//   query("boardInfo",req.params.no)
//   .then(result=>{let img = '';
//     let filepath='';
//     let filename ='';
//       img= result[0].uploadfilename,
//       filename= result[0].filename,
//       filepath = path.join('D:/upload',img ),
//       console.log('img:',img,'path',filepath,'anam',filename),
//       res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''` + encodeURIComponent(filename)),
//       res.send(filepath)
 
//     }).catch(err=>console.log(err))
// })

const members = [
  { userId: "user01", userPw: "1111" },
  { userId: "user02", userPw: "1111" },
  { userId: "user03", userPw: "1111" },
];

app.get("/account", (req, res) => {
  //if (req.cookies && req.cookies.account) {
  if (req.session.is_logined) {
    const member = JSON.parse({userid : req.session.userId});
    return res.send(member);
  }
  res.send(401);
});

app.post('/logout', (req, res) => {
  //res.clearCookie("account");
  req.session.destroy();
  res.send(200);
});

app.post("/login",(req, res) => {
  const userId = req.body.userId; 
  const userPw = req.body.userPw; 
  const member = members.find(m=>m.userId === userId && m.userPw === userPw)
  console.log('member:',member);
  if(member) {
    // const options = {
    //   domain: "localhost",
    //   path: "/",
    //   //maxAge: 10000,    //쿠키유효시간
    //   httpOnly: true,
    // };
    // res.cookie("account", JSON.stringify(member), options);
    req.session.userId = userId; // 세션에 사용자 이메일 정보 저장
    req.session.is_logined = true; // 세션에 로그인 여부 저장
    req.session.save(err => { // 세션 저장
      if(err) throw err;
      res.send(member)
    });
  }
  else {
    res.send(401);
  }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
