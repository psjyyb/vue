var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express',username:'kipodong' });
  //res.redirect("/prod")
  //res.send("hello");
 
  //  const filename = 'img.jpg'

  // 상세조회 이미지 추가
  // const filepath = 'D:/upload/0750864fcbca03d48ca9e3958c689330';  
  // res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심 
  //res.sendFile(path.join(__dirname, '../public', 'index.html'));
  //res.sendFile(filepath);

});

router.get('/prod',(req,res,next)=>{
   let data = [
     {no:1,name:'키보드',price:2000},
     {no:2,name:'마우스',price:6000},
     {no:3,name:'모니터',price:4000}
   ]
   res.render('productList',{list:data});
})

module.exports = router;
