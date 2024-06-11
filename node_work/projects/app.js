const express = require('express');
const boardRouter = require('./routes/board.js')
const customerRouter = require('./routes/customer.js');
const fileRouter = require('./routes/file.js')
//const todoRouter = require('./routes/todo.js')
const cors = require('cors');
const morgan = require('morgan');
const app = express()
const port = 3000;
const cookieParser = require('cookie-parser');
app.use(morgan(':date :method :url :status'));
app.use(cors());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}));
app.use(express.json())

const requestTime = function(req,res,next){
    req.requestTime = Date.now()
    next()
}
app.use(requestTime);
//app.use("/todo",todoRouter);
app.use("/board",boardRouter);
app.use("/customer",customerRouter);
app.use("/file",fileRouter);

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port} 서버실행`)
});

 //method  path    handler
// app.get(    "/",  (req,res)=>{
// //console.log('cookie:',req.cookies);
// res.send("hello world");
// });

// app.get("/post",(req,res)=>{
//     res.send("post world");
// });

// app.get("/ab?cd",(req,res)=>{
//     res.send("regular expressuion~~");
// });

// // app.get(/a/,(req,res)=>{
// //     res.send("mamamamas");
// // });

// app.get(/insert/,(req,res)=>{
//     res.send("insert in ep ");
// });

// const ex0 = function(req,res,next){
//     console.log('첫번째 콜백');
//     next();
// }
// const ex1 = function(req,res,next){
//     console.log('두번째 콜백');
//     next();
// }
// const ex2 = function(req,res,next){
//     res.send('세번째 콜백');
// }
// app.get('/example',[ex0,ex1,ex2]);



